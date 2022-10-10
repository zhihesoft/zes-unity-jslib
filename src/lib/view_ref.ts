import "reflect-metadata";
import { Observable, Subject, throttleTime } from "rxjs";
import { constructor, DependencyContainer } from "tsyringe/dist/typings/types";
import { App } from "./app";
import { DialogRef } from "./dialog_ref";
import { getLogger } from "./logger";
import { BindEventOption, BindMetaData, BindPropOption, BindViewMode, META_BINDOPTION } from "./metadata/metadata_bind";
import { ComponentMetaData, META_COMPONENT } from "./metadata/metadata_component";
import { ResourceService } from "./services/resource_service";
import { assert, isGameObject, isSubject } from "./util_common";
import { isEventOption, isPropOption, isViewHost, isViewOption } from "./util_view";
import { ViewHost } from "./view_host";
import { isAfterViewInit, isOnActiveChanged, isOnDestroy, isOnInit } from "./view_interfaces";
import { ViewOption } from "./view_option";

import UnityEngine = CS.UnityEngine;
import GameObject = CS.UnityEngine.GameObject;
import Transform = CS.UnityEngine.Transform;

export const VIEW_DATA = Symbol("VIEW_DATA_SYMBOL");

export class ViewRef<T = unknown> {

    public static async createRootView<T>(cls: constructor<T>, path: string): Promise<ViewRef<T>> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const view = new ViewRef(cls, null as any); // trick, root view has no parent
        const rootGO = GameObject.Find(path);
        assert(rootGO != null, `cannot find root obj on ${path}`);
        await view.attach(rootGO);
        return view;
    }

    public constructor(
        public componentClass: constructor<T>,
        public parent: ViewRef
    ) {
        this.componentMeta = Reflect.getMetadata(META_COMPONENT, componentClass);
        if (parent) {
            this.container = parent.container.createChildContainer();
        } else {
            this.container = App.container;
        }
    }

    public readonly componentMeta?: ComponentMetaData;
    public readonly container: DependencyContainer;
    public get host() { return this._host; }
    public get component() { return this._component; }
    public get destroyed() { return this._destroyed; }
    public get children() { return this._children; }
    public get outlet() {
        if (this._outlet) {
            return this._outlet;
        }
        if (this.host?.exists("outlet")) {
            this._outlet = this.host?.find("outlet");
        } else {
            this._outlet = this.host?.root;
        }
        assert(this._outlet, `outlet is null, ${this.host}`);
        return this._outlet;
    }

    private _host?: ViewHost;
    private _outlet?: UnityEngine.GameObject;
    private _component?: T;
    private _destroyed = false;
    private _children: ViewRef[] = [];

    createChild<C>(componentClass: constructor<C>): ViewRef<C> {
        return new ViewRef(componentClass, this);
    }

    async attach(node: string | GameObject | ViewHost, data?: unknown): Promise<ViewRef<T>> {
        if (this.parent) {
            this.parent._children.push(this);
        }

        if (typeof node == "string") {
            const hostNode = this.host?.find(node);
            assert(hostNode, `cannot find host node of ${node}`);
            this._host = ViewHost.create(hostNode);
        } else {
            this._host = isViewHost(node) ? node : ViewHost.create(node);
        }

        this.container.register(ViewRef, { useValue: this });
        this.container.register(VIEW_DATA, { useValue: data });

        this._component = this.container.resolve(this.componentClass);
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

    async dialog<D, R>(cls: constructor<D>, option?: ViewOption): Promise<DialogRef<R>> {
        const view = new ViewRef(cls, this);
        const dlg = new DialogRef<R>(view);
        view.container.register(DialogRef<R>, { useValue: dlg });
        await view.show(option);
        return dlg;
    }

    async show(option?: ViewOption): Promise<ViewRef> {

        const template = option?.template || this.componentMeta?.template;

        logger.debug(`ViewRef.show ${template}`);

        if (!template) {
            throw new Error(`show viewref need a template`);
        }

        const isSceneView = template.endsWith(".unity");
        const node = option?.node;
        const loader = App.container.resolve(ResourceService);
        if (isSceneView) {
            logger.info(`load scene ${template}`);
            const scene = await loader.loadScene(template, true);
            logger.info(`load scene ${template} finished`);
            this._host = ViewHost.create(scene);
        } else {
            let hostGO: GameObject | undefined;
            if (isGameObject(node)) {
                hostGO = node;
            } else if (typeof node === "string") {
                hostGO = this.parent.host?.find(node);
            } else if (typeof node === "symbol") {
                hostGO = this.container?.resolve(node);
            } else {
                hostGO = this.parent.outlet;
            }
            assert(hostGO != null, `cannot find host GameObject of (${String(node)})`);
            const prefab: UnityEngine.Object = await loader.loadAsset(template, puer.$typeof(UnityEngine.Object));
            const newgo = <GameObject>GameObject.Instantiate(prefab, hostGO.transform);
            this._host = ViewHost.create(newgo);
        }
        assert(this.host);
        await this.attach(this.host, option?.data);
        return this;
    }

    setActive(value: boolean) {
        this.host?.setActive(value);
    }

    destroy(cleanup = true) {
        assert(!this.destroyed, "view can only destroy once.");
        Array.from(this._children).forEach(i => i.destroy(cleanup));
        this.parent._children = this.parent._children.filter(i => i != this);
        if (isOnDestroy(this.component)) {
            this.component.zesOnDestroy();
        }
        if (cleanup) {
            this.host?.destroy();
        }
        this._destroyed = true;
    }

    destroyChildren(cleanup = true) {
        for (const child of this._children) {
            child.destroy(cleanup);
        }
        this._children = [];
    }

    private async bind() {
        if (!this.host) {
            throw new Error(`host in viewref cannot be null`);
        }
        const bindMap: Map<string, BindMetaData> = Reflect.getMetadata(META_BINDOPTION, this.componentClass);

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

            if (data.option && !isViewOption(data.option)) {
                const comp = data_go.GetComponent(puer.$typeof(data.option.type));
                if (!comp) {
                    logger.error(`cannot find component on gameobject [${data.path}] (${this.componentClass.name}.${String(key)})`);
                    continue;
                }
                if (isPropOption(data.option)) {
                    this.bindProp(comp, key, data.option);
                } else if (isEventOption(data.option)) {
                    this.bindEvent(comp, key, data.option);
                } else {
                    throw new Error(`unknown bind option: ${JSON.stringify(data.option)}`);
                }
            } else {
                const type = Reflect.getMetadata('design:type', this.component as Record<string, unknown>, key);
                const record = this.component as Record<string, unknown>;
                if (data.option) {
                    if (data.option.mode == BindViewMode.attach) {
                        const promise = this.createChild(type).attach(data_go, data.option.extra).then(v => record[key] = v.component);
                        ps.push(promise);
                    } else {
                        const promise = this.createChild(type).show({ data: data.option.extra }).then(v => record[key] = v.component);
                        ps.push(promise);
                    }
                } else if (type == GameObject) {
                    record[key] = data_go;
                } else if (type == Transform) {
                    record[key] = data_go.transform;
                } else {
                    const cvalue = data_go.GetComponent(puer.$typeof(type));
                    if (!cvalue) {
                        logger.error(`cannot get component of type ${type} on ${data_go.name}`);
                    }
                    record[key] = cvalue;
                }
            }
        }
        if (ps.length > 0) {
            await Promise.all(ps);
        }
    }

    private bindProp(uComponent: UnityEngine.Component, key: string, opt: BindPropOption) {
        const propkey = opt.prop;
        assert(propkey, `component property key is empty. (${this.componentClass.name}.${key})`)

        // 值绑定皆为subject
        const subject = (this.component as Record<string, unknown>)[key];
        if (!isSubject(subject)) {
            logger.error(`${this.componentClass.name}.${key} is not a subject object`);
        } else {
            subject.subscribe(v => (uComponent as unknown as Record<string, unknown>)[propkey] = v);
        }
    }

    private bindEvent(comp: UnityEngine.Component, key: string, opt: BindEventOption) {
        const propkey = opt.event;
        if (!propkey) {
            logger.error(`component event key is empty. (${this.componentClass.name}.${key})`);
            return;
        }

        const handle = (comp as unknown as Record<string, unknown>)[propkey];
        if (!handle) {
            logger.error(`event ${propkey} is not existed on (${opt.type}`);
            return;
        }

        const evt = handle as unknown as UnityEngine.Events.UnityEvent;
        const subject = (this.component as unknown as Record<string, unknown>)[key];

        evt.AddListener(this.eventCallback(subject, opt));
    }

    private eventCallback(target: unknown, opt: BindEventOption): (args?: unknown) => void {
        const subject = new Subject();
        let observable: Observable<unknown> = subject;
        if (opt.throttleSeconds) {
            observable = subject.pipe(throttleTime(opt.throttleSeconds * 1000));
        }
        if (isSubject(target)) {
            observable.subscribe(v => target.next(v));
        } else {
            type callbackFunction = (v: unknown) => void;
            observable.subscribe(v => (target as callbackFunction).bind(this.component)(v));
        }
        return (args?: unknown) => subject.next(args);
    }
}

const logger = getLogger(ViewRef.name);
