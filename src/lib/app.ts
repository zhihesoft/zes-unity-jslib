import { constructor } from "tsyringe/dist/typings/types";
import { getLogger } from "./logger";
import { ViewRef } from "./view_ref";

export class App {

    public static async bootstrap<T>(app: constructor<T>, path: string) {
        logger.info(`app bootstrap on ${path} with ${app.name}`);
        await ViewRef.createRootView(app, path);
    }
}

const logger = getLogger(App.name);
