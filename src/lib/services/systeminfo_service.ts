import { UnityEngine, Zes } from "csharp";
import { singleton } from "tsyringe";
import { App } from "../app";

@singleton()
export class SystemInfo {

    get version(): string {
        return App.version;
    }

    get platform(): string {
        return Zes.App.platform;
    }

    get device(): string {
        return UnityEngine.SystemInfo.deviceModel;
    }

    get deviceUID(): string {
        return UnityEngine.SystemInfo.deviceUniqueIdentifier;
    }
}