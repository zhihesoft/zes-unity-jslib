import { Zes } from "csharp";
import { constructor } from "tsyringe/dist/typings/types";
import { getLogger } from "./logger";
import { PatchProvider } from "./patch/patch_provider";
import { PatchProviderPseudo } from "./patch/patch_provider_pseudo";
import { PatchProviderRuntime } from "./patch/patch_provider_runtime";
import { ViewRef } from "./view_ref";

export class App {

    public static async bootstrap<T>(app: constructor<T>, path: string) {
        logger.info(`app bootstrap on ${path} with ${app.name}`);
        await ViewRef.createRootView(app, path);
    }

    public static createPatchProvider(): PatchProvider {
        if (Zes.App.inEditor) {
            return new PatchProviderPseudo();
        }
        return new PatchProviderRuntime();
    }
}

const logger = getLogger(App.name);
