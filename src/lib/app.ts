import { UnityEngine, Zes } from "csharp";
import { container } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { getLogger } from "./logger";
import { PatchProvider } from "./patch/patch_provider";
import { PatchProviderPseudo } from "./patch/patch_provider_pseudo";
import { PatchProviderRuntime } from "./patch/patch_provider_runtime";
import { VersionInfo } from "./patch/version_info";
import { ResourceService } from "./services/resource_service";
import { pathCombine } from "./util";
import { ViewRef } from "./view_ref";

export class App {

    public static version: string = UnityEngine.Application.version;

    public static async bootstrap<T>(app: constructor<T>, path: string) {
        await App.getVersion();
        logger.info(`app@${App.version} bootstrap on ${path} with ${app.name}`);
        await ViewRef.createRootView(app, path);
    }

    private static async getVersion() {
        if (Zes.App.inEditor) {
            return UnityEngine.Application.version;
        }

        let versionInfoPath = pathCombine(
            UnityEngine.Application.persistentDataPath,
            Zes.App.config.patchDataPath,
            Zes.App.config.versionInfoFile);

        if (!Zes.Util.FileExists(versionInfoPath)) {
            versionInfoPath = pathCombine(UnityEngine.Application.streamingAssetsPath, Zes.App.config.versionInfoFile);
        }

        const loader = container.resolve(ResourceService);
        const json = await loader.loadText(versionInfoPath);
        const v = JSON.parse(json) as VersionInfo;
        App.version = v.version;
    }

    public static createPatchProvider(): PatchProvider {
        if (Zes.App.inEditor) {
            return new PatchProviderPseudo();
        }
        return new PatchProviderRuntime();
    }
}

const logger = getLogger(App.name);
