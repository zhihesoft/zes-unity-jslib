import compareVersions from "compare-versions";
import { sumBy } from "lodash";
import { App } from "../app";
import { getLogger } from "../logger";
import { assert, pathCombine, waitForSeconds } from "../utils";
import { PatchFileInfo, PatchInfo } from "./patch_info";
import { PatchProvider } from "./patch_provider";
import { PatchStatus } from "./patch_status";
import { VersionInfo } from "./version_info";

import ZApp = CS.Au.App;
import Path = CS.System.IO.Path;
import $promise = puer.$promise;

export class PatchProviderRuntime implements PatchProvider {

    private http = new CS.Au.Connectors.HttpConnector(pathCombine(ZApp.config.patchServer, ZApp.platform.toLowerCase()));

    private get patchDataPath(): string { return Path.Combine(CS.UnityEngine.Application.persistentDataPath, "patch_data"); }
    private get patchTempPath(): string { return Path.Combine(CS.UnityEngine.Application.persistentDataPath, "__patch_temp"); }
    private get versionFile() { return "version.json"; }
    private get patchFile() { return "patch.json"; }

    async check(): Promise<PatchStatus> {
        const config = ZApp.config;

        if (!config.checkUpdate) {
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
        App.version = localVersion.version;
        return PatchStatus.None;
    }

    async extract(): Promise<void> {
        CS.Au.Utils.DirClear(this.patchDataPath);
        await this.copyToPersistent(this.versionFile);
        await this.copyToPersistent(this.patchFile);
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
        local.files.forEach(i => map.set(i.path, i));
        
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

        const tempDir = this.patchTempPath;
        const patchDir = this.patchDataPath;
        CS.Au.Utils.DirClear(tempDir);

        for (const item of list) {
            await $promise(this.http.Download(`${remote.url}/${item.path}`, Path.Combine(tempDir, item.path), (p: number) => {
                const downloading = p * item.size;
                progress((downloaded + downloading) / totalsize);
            }));
            downloaded += item.size;
            progress(downloaded / totalsize);
        }
        await waitForSeconds(0.1);

        for (const item of list) {
            logger.info(`copy patch file ${item.path} to ${patchDir}`);
            await $promise(CS.Au.Utils.FileCopy(pathCombine(tempDir, item.path), pathCombine(patchDir, item.path)));
        }

        CS.Au.Utils.DirClear(tempDir);
        CS.Au.Utils.FileSave(JSON.stringify(remoteVersion), Path.Combine(patchDir, this.versionFile));
        CS.Au.Utils.FileSave(JSON.stringify(remote), Path.Combine(patchDir, this.patchFile));

        App.version = remote.version;

        progress(1);
    }

    private async copyToPersistent(name: string): Promise<void> {
        const streamPath = Path.Combine(CS.UnityEngine.Application.streamingAssetsPath, name);
        const persistentPath = Path.Combine(CS.UnityEngine.Application.persistentDataPath, this.patchDataPath, name);
        logger.info(`copy ${name} from ${streamPath} to ${persistentPath}`);
        await CS.Au.Utils.FileCopy(streamPath, persistentPath);
    }

    private async loadRemotePatchInfo(): Promise<PatchInfo | undefined> {
        const remoteJson = await $promise<CS.Au.Connectors.HttpResult>(this.http.Get(`/${this.patchFile}`));
        assert(remoteJson.data, `load remote patch info failed`);
        return JSON.parse(remoteJson.data);
    }

    private async loadRemoteVersionInfo(): Promise<VersionInfo | undefined> {
        const remoteJson = await $promise<CS.Au.Connectors.HttpResult>(this.http.Get(`/${this.versionFile}`));
        assert(remoteJson.data, `load remote version info failed`);
        return JSON.parse(remoteJson.data);
    }

    private async loadLocalPatchInfo(): Promise<PatchInfo | undefined> {
        const patchInfoPath = Path.Combine(
            CS.UnityEngine.Application.persistentDataPath,
            this.patchDataPath,
            this.patchFile);
        if (!CS.Au.Utils.FileExists(patchInfoPath)) {
            return undefined;
        }
        const json = await $promise<string>(ZApp.loader.LoadText(patchInfoPath));
        return JSON.parse(json);
    }

    private async loadStreamingVersionInfo(): Promise<VersionInfo | undefined> {
        const versionInfoPath = Path.Combine(CS.UnityEngine.Application.streamingAssetsPath, this.versionFile);
        if (!CS.Au.Utils.FileExists(versionInfoPath)) {
            return undefined;
        }
        const json = await $promise<string>(ZApp.loader.LoadText(versionInfoPath));
        return JSON.parse(json);
    }

    private async loadLocalVersionInfo(): Promise<VersionInfo | undefined> {
        const versionInfoPath = Path.Combine(
            CS.UnityEngine.Application.persistentDataPath,
            this.patchDataPath,
            this.versionFile);
        if (!CS.Au.Utils.FileExists(versionInfoPath)) {
            return undefined;
        }
        const json = await $promise<string>(ZApp.loader.LoadText(versionInfoPath));
        return JSON.parse(json);
    }
}

const logger = getLogger(PatchProviderRuntime.name);
