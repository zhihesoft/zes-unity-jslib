import { UnityEngine } from "csharp";
import "reflect-metadata";
import { singleton } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { App } from "../app";
import { META_PAGE, PageMetaData, Transit } from "../metadata_page";
import { assert } from "../util";
import { ViewRef } from "../view_ref";
import { FadeService } from "./fade_service";
import { LayerService } from "./layer_service";

@singleton()
export class PageService {

    constructor(
        private layers: LayerService,
        private fade: FadeService,
    ) { }

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
        if (meta.transit == Transit.Fade) {
            await this.fade.out();
        }

        let view: ViewRef<T> | undefined = this.views.find(v => v.componentClass == cls) as ViewRef<T>;
        if (view) {
            this.currentView?.setActive(false);
            this.views = this.views.filter(v => v.componentClass != cls);
            this.views.push(view);
            view.setActive(true);
        } else {
            view = App.view.createChild(cls);
            this.currentView?.setActive(false);
            this.views.push(view);
            this.currentView?.setActive(true);
            view.show({ node: meta.layer, data });
        }

        if (meta.transit == Transit.Fade) {
            await this.fade.in();
        }

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

        if (meta.transit == Transit.Fade) {
            await this.fade.out();
        }

        this.views.forEach(v => v.destroy());
        this.views = [];

        const view = App.view.createChild(cls);
        this.views.push(view);
        view.show({ node: meta.layer, data });

        if (meta.transit == Transit.Fade) {
            await this.fade.in();
        }

        return view;
    }

    private getPageMeta<T>(cls: constructor<T>): { layer: UnityEngine.GameObject, transit: Transit } {
        const conf = (Reflect.getMetadata(META_PAGE, cls) as PageMetaData) ?? {};
        const layer = conf.layer ? this.layers.get(conf.layer) : this.layers.defaultLayer;
        const transit = conf.transit ?? Transit.None;
        return { layer, transit };
    }
}

// const logger = getLogger(PageService.name);
