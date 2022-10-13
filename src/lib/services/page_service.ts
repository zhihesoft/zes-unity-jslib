import { singleton } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { App } from "../app";
import { getLogger } from "../logger";
import { ComponentMetaData, META_COMPONENT } from "../metadata/metadata_component";
import { TransitionService } from "../transitions/transitions";
import { Transit } from "../transitions/transit_type";
import { assert } from "../util_common";
import { ViewRef } from "../view_ref";

@singleton()
export class PageService {

    constructor() {
        this.transition = App.container.resolve(TransitionService);
    }

    private host?: ViewRef;                 // host view
    private transition: TransitionService;
    private pages: ViewRef[] = [];
    private tags?: CS.Au.Tags;

    createSubPages(host: ViewRef) {
        const ret = new PageService();
        ret.setHost(host);
        return ret;
    }

    setHost(view: ViewRef) {
        assert(view);
        this.host = view;
    }

    get currentPage(): ViewRef | undefined {
        if (this.pages.length <= 0) {
            return undefined;
        }
        return this.pages[this.pages.length - 1];
    }

    async navigate<T>(cls: constructor<T>): Promise<ViewRef<T>>;
    async navigate<T>(cls: constructor<T>, data?: unknown): Promise<ViewRef<T>> {
        assert(this.host);
        const meta = this.getPageMeta(cls);
        await this.transition.before(meta.transit);
        let view: ViewRef<T> | undefined = this.pages.find(v => v.componentClass == cls) as ViewRef<T>;
        if (view) {
            this.currentPage?.setActive(false);
            this.pages = this.pages.filter(v => v.componentClass != cls);
            this.pages.push(view);
            view.setActive(true);
        } else {
            view = this.host.createChild(cls);
            await view.show({ node: meta.layer, data });
            this.currentPage?.setActive(false);
            this.pages.push(view);
            this.currentPage?.setActive(true);
        }
        await this.transition.after(meta.transit, view);
        return view;
    }

    async goBack(): Promise<ViewRef> {
        assert(this.pages.length > 1, "Cannot go back if only one page existd");
        const view = this.pages.pop();
        assert(view);
        view.destroy();
        assert(this.currentPage);
        this.currentPage.setActive(true);
        return this.currentPage;
    }

    async replace<T>(cls: constructor<T>, data?: unknown): Promise<ViewRef<T>> {
        assert(this.host);
        const meta = this.getPageMeta(cls);
        await this.transition.before(meta.transit);
        const view = this.host.createChild(cls);
        await view.show({ node: meta.layer, data });
        this.pages.forEach(v => v.destroy());
        this.pages = [];
        this.pages.push(view);
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
        assert(this.host, "view cannot be null");
        const rootGo = this.host.host?.root;
        assert(rootGo, "view host gameobject cannot be null");
        if (!layer || layer.length <= 0) {
            return rootGo;
        }

        if (layer.startsWith("#")) {
            if (!this.tags) {
                this.tags = rootGo.GetComponent(puer.$typeof(CS.Au.Tags)) as CS.Au.Tags;
            }
            assert(this.tags, `tags cannot be null for layer ${layer}`);
            const go = this.tags.Get(layer.substring(1));
            assert(go, `cannot find layer of ${layer}`);
            return go;
        }

        const trans = rootGo.transform.Find(layer);
        if (!trans) {
            logger.error(`cannot find outlet of ${layer} on ${rootGo.name}`);
            return rootGo;
        }
        return trans.gameObject;
    }

}

const logger = getLogger(PageService.name);
