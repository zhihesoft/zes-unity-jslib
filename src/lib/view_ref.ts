/* eslint-disable @typescript-eslint/no-explicit-any */
import "reflect-metadata";
import { UnityEngine } from "csharp";
import { $typeof } from "puerts";
import { Observable, Subject, throttleTime } from "rxjs";
import { BindData, BindEventOption, BindPropOption, BindViewOption, META_BINDOPTION } from "./metadata_bind";
import { ComponentMetaData, META_COMPONENT } from "./metadata_component";
import { getLogger } from "./logger";
import { assert } from "./util";
import { ViewHost } from "./view_host";
import { isAfterViewInit, isOnActiveChanged, isOnDestroy, isOnInit } from "./view_interfaces";
import { ViewOption } from "./view_option";

import GameObject = UnityEngine.GameObject;
import Transform = UnityEngine.Transform;
import { constructor, DependencyContainer } from "tsyringe/dist/typings/types";
import { container } from "tsyringe";
import { ResourceService } from "./services/resource_service";

export const VIEW_DATA = Symbol("VIEW_DATA_SYMBOL");

export class ViewRef<T = unknown> {

    public static async createRootView<T>(cls: constructor<T>, path: string): Promise<ViewRef<T>> {
        const view = new ViewRef(cls, null as any); // trick, root view has no parent
        const rootGO = GameObject.Find(path);
        assert(rootGO != null, `cannot find root obj on ${path}`);
        await view.attach(rootGO);
        return view;
    }

    public constructor(public componentClass: constructor<T>, public parent: ViewRef) {
        this.componentMeta = Reflect.getMetadata(META_COMPONENT, componentClass);
        if (parent) {
            this.container = parent.container.createChildContainer();
        } else {
            this.container = container;
        }
    }

    public readonly componentMeta?: ComponentMetaData;
    public readonly container: DependencyContainer;
    public get host() { return this._host; }
    public get component() { return this._component; }
    public get disposed() { return this._disposed; }

    private _host?: ViewHost;
    private _component?: T;
    private _disposed = false;
    private _children: ViewRef[] = [];

    createChild<C>(componentClass: constructor<C>): ViewRef<C> {
        return new ViewRef(componentClass, this);
    }

    async attach(host: GameObject | ViewHost): Promise<ViewRef>;
    async attach(host: GameObject | ViewHost, data: unknown): Promise<ViewRef>;
    async attach(host: GameObject | ViewHost, data?: unknown): Promise<ViewRef> {
        if (this.parent) {
            this.parent._children.push(this);
        }

        this._host = this.isViewHost(host) ? host : ViewHost.create(host);
        this._component = this.container.resolve(this.componentClass);

        this.container.register(ViewRef, { useValue: this });
        this.container.register(VIEW_DATA, { useValue: data });
        this.container.register(this.componentClass, { useValue: this.component });

        await this.bind();
        if (isOnInit(this.component)) {
            await this.component.zesOnInit();
        }
        if (isAfterViewInit(this.component)) {
            this.component.zesAfterViewInit();
        }
        if (isOnActiveChanged(this.component)) {
            this.component.zesOnActiveChanged(true);
        }
        return this;
    }

    async show(): Promise<ViewRef>;
    async show(option: ViewOption): Promise<ViewRef>
    async show(option?: ViewOption): Promise<ViewRef> {
        const template = option?.template || this.componentMeta?.template;
        if (!template) {
            throw new Error(`show viewref need a template`);
        }

        const isSceneView = template.endsWith(".unity");
        const node = option?.node;
        if (!node && !isSceneView) {
            throw new Error(`gameobject view should have a host node...`);
        }

        const loader = container.resolve(ResourceService);
        if (isSceneView) {
            const scene = await loader.loadScene(template, true);
            this._host = ViewHost.create(scene);
        } else {
            let hostGO: GameObject | undefined;
            if (this.isGameObject(node)) {
                hostGO = node;
            } else if (typeof node === "string") {
                hostGO = this.parent.host?.find(node);
            } else if (typeof node === "symbol") {
                hostGO = container?.resolve(node);
            } else {
                throw new Error(`unknown node type (${node})`);
            }
            if (!hostGO) {
                throw new Error(`cannot find host go of (${String(node)})`);
            }

            const prefab: UnityEngine.Object = await loader.loadAsset(template, $typeof(UnityEngine.Object));
            const newgo = <GameObject>GameObject.Instantiate(prefab, hostGO.transform);
            this._host = ViewHost.create(newgo);
        }
        assert(this.host);
        await this.attach(this.host, option?.data);
        return this;
    }

    destroy(cleanup = true) {
        if (!this.disposed) {
            Array.from(this._children).forEach(i => i.destroy(cleanup));
            this.parent._children = this.parent._children.filter(i => i != this);
            if (isOnDestroy(this.component)) {
                this.component.zesOnDestroy();
            }
            if (cleanup) {
                this.host?.destroy();
            }
            this._disposed = true;
        }
    }

    private isViewHost(obj: ViewHost | GameObject): obj is ViewHost {
        return (<ViewHost>obj).isSceneHost != undefined;
    }

    private async bind() {
        if (!this.host) {
            throw new Error(`host in viewref cannot be null`);
        }
        const bindMap: Map<string, BindData> = Reflect.getMetadata(META_BINDOPTION, this.componentClass);

        if (!bindMap) {
            return;
        }

        const ps: Promise<unknown>[] = [];

        for (const pair of bindMap) {
            const { key, data } = { key: pair[0], data: pair[1] };
            const data_go = this.host.find(data.path);

            if (!data_go) {
                logger.error(`cannot find (${data.path}) on gameobject (${this.componentClass.name}.${String(key)})`);
                continue;
            }

            if (data.option && !this.isViewOption(data.option)) {
                const comp = data_go.GetComponent(data.option.type);
                if (!comp) {
                    logger.error(`cannot find component on gameobject [${data.path}] (${this.componentClass.name}.${String(key)})`);
                    continue;
                }
                if (this.isPropOption(data.option)) {
                    this.bindProp(comp, key, data.option);
                } else if (this.isEventOption(data.option)) {
                    this.bindEvent(comp, key, data.option);
                } else {
                    throw new Error(`unknown bind option: ${JSON.stringify(data.option)}`);
                }
            } else {
                const type = Reflect.getMetadata('design:type', <any>this.component, key);
                if (data.option) {
                    const promise = this.createChild(type).attach(data_go, data.option.extra).then(v => (<any>this.component)[key] = v.component);
                    ps.push(promise);
                } else if (type == GameObject) {
                    (<any>this.component)[key] = data_go;
                } else if (type == Transform) {
                    (<any>this.component)[key] = data_go.transform;
                } else {
                    (<any>this.component)[key] = data_go.GetComponent($typeof(type));
                }
            }
        }
        if (ps.length > 0) {
            await Promise.all(ps);
        }
    }

    private isGameObject(obj: unknown): obj is UnityEngine.GameObject {
        return (<UnityEngine.GameObject>obj).activeSelf != undefined;
    }


    private isPropOption(opt: BindPropOption | BindEventOption | BindViewOption): opt is BindPropOption {
        return ((<BindPropOption>opt).prop != undefined);
    }

    private isEventOption(opt: BindPropOption | BindEventOption | BindViewOption): opt is BindEventOption {
        return ((<BindEventOption>opt).event != undefined);
    }

    private isViewOption(opt: BindPropOption | BindEventOption | BindViewOption): opt is BindViewOption {
        return ((<BindViewOption>opt).mode != undefined);
    }

    private bindProp(comp: UnityEngine.Component, key: string, opt: BindPropOption) {
        const propkey = opt.prop;
        if (!propkey) {
            logger.error(`component property key is empty. (${this.componentClass.name}.${key})`);
            return;
        }

        // 值绑定皆为subject
        const subject = (<any>this.component)[key];
        if (!subject.subscribe) {
            logger.error(`${this.componentClass.name}.${key} is not a subject object`);
        } else {
            subject.subscribe({
                next: (v: any) => (<any>comp)[propkey] = v
            });
        }
    }

    private bindEvent(comp: UnityEngine.Component, key: string, opt: BindEventOption) {
        const propkey = opt.event;
        if (!propkey) {
            logger.error(`component event key is empty. (${this.componentClass.name}.${key})`);
            return;
        }

        const handle = (<any>comp)[propkey];
        if (!handle) {
            logger.error(`event ${propkey} is not existed on (${opt.type}`);
            return;
        }

        const evt: UnityEngine.Events.UnityEvent = handle;
        const subject = (<any>this.component)[key];

        evt.AddListener(this.eventCallback(subject, opt));
    }

    private eventCallback(target: any, opt: BindEventOption): (args?: any) => void {
        const subject = new Subject();
        let observable: Observable<unknown> = subject;
        if (opt.throttleSeconds) {
            observable = subject.pipe(throttleTime(opt.throttleSeconds * 1000));
        }
        if (this.isSubject(target)) {
            observable.subscribe(v => target.next(v));
        } else {
            observable.subscribe(v => target.bind(this.component)(v));
        }
        return (args?: any) => subject.next(args);
    }

    private isSubject<T = any>(target: any): target is Subject<T> {
        if (target.subscribe) {
            return true;
        }
        return false;
    }

}

const logger = getLogger(ViewRef.name);
