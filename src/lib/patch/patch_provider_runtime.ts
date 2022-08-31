import compareVersions from "compare-versions";
import { UnityEngine, Zes } from "csharp";
import { sumBy } from "lodash";
import { $promise } from "puerts";
import { getLogger } from "../logger";
import { assert, pathCombine, waitForSeconds } from "../util";
import { PatchFileInfo, PatchInfo } from "./patch_info";
import { PatchProvider } from "./patch_provider";
import { PatchStatus } from "./patch_status";
import { VersionInfo } from "./version_info";

import App = Zes.App;

export class PatchProviderRuntime implements PatchProvider {

    private http = new Zes.HttpConnector(pathCombine(App.config.patchServer, App.platform.toLowerCase()));

    private get patchDataPath(): string {
        return pathCombine(UnityEngine.Application.persistentDataPath, App.config.patchDataPath);
    }

    async check(): Promise<PatchStatus> {
        const config = App.config;

        if (!config.checkUpdate) {
            await waitForSeconds(1);
            return PatchStatus.None;
        }

        const localVersion = await this.loadLocalVersionInfo();
        if (!localVersion) {
            return PatchStatus.Extract; // 本地没有记录，需要解压
        }
        const streamingVersionInfo = await this.loadStreamingVersionInfo();
        assert(streamingVersionInfo, `parse json of streaming version info failed.`);

        if (compareVersions(streamingVersionInfo.version, localVersion.version) > 0) {
            return PatchStatus.Extract; // 包里的版本新，需要解压
        }

        // get remote version
        const remoteVersion = await this.loadRemoteVersionInfo();
        assert(remoteVersion, `load remote version failed`);
        const result = compareVersions(localVersion.version, remoteVersion.version);
        if (result < 0) {

            if (compareVersions(localVersion.version, remoteVersion.minVersion) < 0) {
                return PatchStatus.Reinstall;
            }

            return PatchStatus.Found;
        }
        return PatchStatus.None;
    }

    async extract(): Promise<void> {
        Zes.Util.DirClear(this.patchDataPath);
        await this.copyToPersistent(App.config.versionInfoFile);
        await this.copyToPersistent(App.config.patchInfoFile);
    }

    async patch(progress: (p: number) => void): Promise<void> {

        const local = await this.loadLocalPatchInfo();
        assert(local, "load local patch info failed");
        const remote = await this.loadRemotePatchInfo();
        assert(remote, "load remote patch info failed");
        const remoteVersion = await this.loadRemoteVersionInfo();
        assert(remoteVersion, "load remote version info failed");

        const map = new Map<string, PatchFileInfo>();
        const list: PatchFileInfo[] = [];

        for (const item of local.files) {
            map.set(item.path, item);
        }
        for (const item of remote.files) {
            if (!map.has(item.path)) {
                list.push(item);
            } else {
                const localItem = map.get(item.path);
                if (localItem?.md5 != item.md5) {
                    list.push(item);
                }
            }
        }
        list.forEach(i => logger.info(`find patch file ${i.path}`));

        if (list.length <= 0) {
            logger.warn(`no patch file found`);
            return;
        }

        const totalsize = sumBy(list, (i) => i.size);
        let downloaded = 0;

        const tempDir = pathCombine(UnityEngine.Application.persistentDataPath, "__temp");
        const patchDir = pathCombine(UnityEngine.Application.persistentDataPath, App.config.patchDataPath);
        Zes.Util.DirClear(tempDir);

        for (const item of list) {
            await $promise(this.http.Download(`${remote.url}/${item.path}`, pathCombine(tempDir, item.path), (p: number) => {
                const downloading = p * item.size;
                progress((downloaded + downloading) / totalsize);
            }));
            downloaded += item.size;
            progress(downloaded / totalsize);
        }
        await waitForSeconds(0.1);

        for (const item of list) {
            logger.info(`copy patch file ${item.path} to ${patchDir}`);
            await $promise(Zes.Util.FileCopy(pathCombine(tempDir, item.path), pathCombine(patchDir, item.path)));
        }

        Zes.Util.DirClear(tempDir);
        Zes.Util.FileSave(JSON.stringify(remoteVersion), pathCombine(patchDir, App.config.versionInfoFile));
        Zes.Util.FileSave(JSON.stringify(remote), pathCombine(patchDir, App.config.patchInfoFile));

        progress(1);
    }

    private async copyToPersistent(name: string): Promise<void> {
        const streamPath = pathCombine(UnityEngine.Application.streamingAssetsPath, name);
        const persistentPath = pathCombine(UnityEngine.Application.persistentDataPath, App.config.patchDataPath, name);
        logger.info(`copy ${name} from ${streamPath} to ${persistentPath}`);
        await Zes.Util.FileCopy(streamPath, persistentPath);
    }

    private async loadRemotePatchInfo(): Promise<PatchInfo | undefined> {
        const remoteJson = await $promise(this.http.Get(`/${App.config.patchInfoFile}`));
        assert(remoteJson.data, `load remote patch info failed`);
        return JSON.parse(remoteJson.data);
    }

    private async loadRemoteVersionInfo(): Promise<VersionInfo | undefined> {
        const remoteJson = await $promise(this.http.Get(`/${App.config.versionInfoFile}`));
        assert(remoteJson.data, `load remote version info failed`);
        return JSON.parse(remoteJson.data);
    }

    private async loadLocalPatchInfo(): Promise<PatchInfo | undefined> {
        const patchInfoPath = pathCombine(
            UnityEngine.Application.persistentDataPath,
            App.config.patchDataPath,
            App.config.patchInfoFile);
        if (!Zes.Util.FileExists(patchInfoPath)) {
            return undefined;
        }
        const json = await $promise(App.loader.LoadText(patchInfoPath));
        return JSON.parse(json);
    }

    private async loadStreamingVersionInfo(): Promise<VersionInfo | undefined> {
        const versionInfoPath = pathCombine(
            UnityEngine.Application.streamingAssetsPath,
            App.config.versionInfoFile);
        if (!Zes.Util.FileExists(versionInfoPath)) {
            return undefined;
        }
        const json = await $promise(App.loader.LoadText(versionInfoPath));
        return JSON.parse(json);
    }

    private async loadLocalVersionInfo(): Promise<VersionInfo | undefined> {
        const versionInfoPath = pathCombine(
            UnityEngine.Application.persistentDataPath,
            App.config.patchDataPath,
            App.config.versionInfoFile);
        if (!Zes.Util.FileExists(versionInfoPath)) {
            return undefined;
        }
        const json = await $promise(App.loader.LoadText(versionInfoPath));
        return JSON.parse(json);
    }
}

const logger = getLogger(PatchProviderRuntime.name);
