
import { container } from "tsyringe";
import { constructor, DependencyContainer } from "tsyringe/dist/typings/types";
import { RootComponent } from "./components/root";
import { getLogger } from "./logger";
import { assert } from "./utils";
import { ViewRef } from "./views/view_ref";

import Au = CS.Au.App;

export class App {

    public static version: string = CS.UnityEngine.Application.version;
    public static view: ViewRef;
    public static container: DependencyContainer = container;

    public static async bootstrap<T>(app: constructor<T>, path: string) {
        logger.info(`app@${App.version} bootstrap on ${path} with ${app.name}`);
        App.view = await ViewRef.createRootView(RootComponent, path);
        const appview = new ViewRef(app, App.view); // App.view.createChild(app);
        assert(App.view.host);
        appview.attach(App.view.host);
    }

    public static get loader() {
        return Au.loader;
    }
}

const logger = getLogger(App.name);
