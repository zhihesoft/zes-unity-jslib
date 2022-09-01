import { UnityEngine } from "csharp";
import { constructor } from "tsyringe/dist/typings/types";
import { getLogger } from "./logger";
import { RootComponent } from "./root_component";
import { assert } from "./util";
import { ViewRef } from "./view_ref";

export class App {
    public static version: string = UnityEngine.Application.version;

    public static view: ViewRef;

    public static async bootstrap<T>(app: constructor<T>, path: string) {
        logger.info(`app@${App.version} bootstrap on ${path} with ${app.name}`);
        App.view = await ViewRef.createRootView(RootComponent, path);
        
        const appview = App.view.createChild(app);
        assert(App.view.host);
        appview.attach(App.view.host);
    }
}

const logger = getLogger(App.name);
