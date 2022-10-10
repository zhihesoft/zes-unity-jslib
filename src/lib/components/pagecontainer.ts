import { constructor } from "tsyringe/dist/typings/types";
import { App } from "../app";
import { getLogger } from "../logger";
import { ComponentMetaData, META_COMPONENT } from "../metadata/metadata_component";
import { TransitionService } from "../transitions/transitions";
import { Transit } from "../transitions/transit_type";
import { assert } from "../util_common";
import { ViewRef } from "../view_ref";

export class PageContainer {
    constructor(
        private root: ViewRef
    ) {
        this.transition = App.container.resolve(TransitionService);
    }

    private readonly transition: TransitionService;
    private views: ViewRef[] = [];

    get currentView(): ViewRef | undefined {
        if (this.views.length <= 0) {
            return undefined;
        }
        return this.views[this.views.length - 1];
    }

    async navigate<T>(cls: constructor<T>): Promise<ViewRef<T>>;
    async navigate<T>(cls: constructor<T>, data?: unknown): Promise<ViewRef<T>> {

        // logger.info(`navigate to ${cls.name}`);
        const meta = this.getPageMeta(cls);
        await this.transition.before(meta.transit);
        let view: ViewRef<T> | undefined = this.views.find(v => v.componentClass == cls) as ViewRef<T>;
        if (view) {
            this.currentView?.setActive(false);
            this.views = this.views.filter(v => v.componentClass != cls);
            this.views.push(view);
            view.setActive(true);
        } else {
            view = this.root.createChild(cls);
            this.currentView?.setActive(false);
            this.views.push(view);
            this.currentView?.setActive(true);
            await view.show({ node: meta.layer, data });
        }

        await this.transition.after(meta.transit, view);
        return view;
    }

    async goBack(): Promise<ViewRef> {
        assert(this.views.length > 1, "Cannot go back if only one page existd");
        const view = this.views.pop();
        assert(view);
        view.destroy();
        assert(this.currentView);
        this.currentView.setActive(true);
        return this.currentView;
    }

    async replace<T>(cls: constructor<T>, data?: unknown): Promise<ViewRef<T>> {
        const meta = this.getPageMeta(cls);

        await this.transition.before(meta.transit);
        this.views.forEach(v => v.destroy());
        this.views = [];
        const view = this.root.createChild(cls);
        this.views.push(view);
        await view.show({ node: meta.layer, data });
        await this.transition.after(meta.transit, view);
        return view;
    }

    private getPageMeta<T>(cls: constructor<T>): { layer: CS.UnityEngine.GameObject, transit: Transit } {
        const conf = (Reflect.getMetadata(META_COMPONENT, cls) as ComponentMetaData) ?? {};
        const layer = this.getLayer(conf.layer); //  conf.layer ? this.layers.get(conf.layer) : this.layers.defaultLayer;
        const transit = conf.transit ?? Transit.None;
        return { layer, transit };
    }

    private getLayer(layer?: string): CS.UnityEngine.GameObject {
        const rootGo = this.root.host?.root;
        assert(rootGo);
        if (!layer || layer.length <= 0) {
            return rootGo;
        }

        const kv: Record<string, unknown> = this.root.component as Record<string, unknown>;
        if (kv[layer]) {
            return kv[layer] as CS.UnityEngine.GameObject;
        }

        const trans = rootGo.transform.Find(layer);
        if (!trans) {
            logger.error(`cannot find outlet of ${layer} on ${rootGo.name}`);
            return rootGo;
        }
        return trans.gameObject;
    }
}

const logger = getLogger(PageContainer.name);
