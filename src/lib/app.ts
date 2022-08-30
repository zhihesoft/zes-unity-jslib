import { constructor } from "tsyringe/dist/typings/types";
import { getLogger } from "./logger";
import { ViewRef } from "./view_ref";

export class App {

    public static async bootstrap<T>(app: constructor<T>, path: string) {
        App._rootView = await ViewRef.createRootView(app, path);
    }

    private static _rootView: ViewRef;
}

const logger = getLogger(App.name);
