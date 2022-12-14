import { sum } from "lodash";
import { singleton } from "tsyringe";
import { assert, emptyFunc } from "../utils";
import Type = CS.System.Type;

/**
 * Resource Service
 */
@singleton()
export class ResourceService {

    constructor(
        private assetSet: CS.Au.AssetSet
    ) { }

    private assets = new Map<string, CachedAsset>();

    /**
     * load a text data from file
     * @param path file path
     * @returns text data
     */
    async loadText(path: string): Promise<string> {
        const ret: string = await puerts.$promise(CS.Au.Files.Read(path));
        return ret;
    }

    /**
     * batch load bundles
     * @param names bundle names
     * @param progress loading progress
     */
    async loadBundles(names: string[], progress: (p: number) => void): Promise<void> {
        const allprogress: number[] = [names.length];
        const ps = names.map((n, i) => this.loadBundle(n, (p) => {
            allprogress[i] = p;
            progress(sum(allprogress) / allprogress.length);
        }));
        await Promise.all(ps);
    }

    /**
     * load one bundle
     * @param name bundle name
     * @param progress load progress
     */
    async loadBundle(name: string, progress?: (p: number) => void): Promise<void> {

        await puer.$promise(this.assetSet.LoadBundle(name, p => progress?.call(this, p)));
    }

    /**
     * unload one bundle
     * @param name bundle name
     */
    unloadBundle(name: string) {
        this.assetSet.UnloadBundle(name);
    }

    unloadAllBundles() {
        this.assetSet.UnloadAllBundles();
    }

    /**
     * load an asset from bundle
     * @param path asset path, should be full path like 'Assets/Bundles/conf/game.json'
     * @param type asset type, like UnityEngine.TextAsset and so on
     * @returns UnityEngine.Object
     */
    async loadAsset(path: string, type: Type): Promise<CS.UnityEngine.Object> {

        path = path.toLowerCase();

        if (this.assets.has(path)) {
            const exists = this.assets.get(path);
            assert(exists?.data, `asset of ${path} in cache cannot be null`);
            exists.time = new Date().getTime();
            return exists.data;
        }

        const ret: CS.UnityEngine.Object = await puer.$promise(this.assetSet.LoadObject(path, type));
        const item = new CachedItem<CS.UnityEngine.Object>();
        item.data = ret;
        this.assets.set(path, item);
        return ret;
    }

    /**
     * load a scene
     * @param path scene full path
     * @param additive additive mode
     * @param progress load progress
     * @returns  Scene
     */
    async loadScene(path: string, additive: boolean, progress?: (p: number) => void): Promise<CS.UnityEngine.SceneManagement.Scene> {
        progress = progress ?? emptyFunc;
        const ret: CS.UnityEngine.SceneManagement.Scene = await puer.$promise(this.assetSet.LoadScene(path, additive, progress));
        return ret;
    }

    /**
     * unload a scene
     * @param scene scene to unload
     * @returns 
     */
    async unloadScene(scene: CS.UnityEngine.SceneManagement.Scene): Promise<boolean> {
        return puer.$promise(this.assetSet.UnloadScene(scene));
    }
}

type CachedAsset = CachedItem<CS.UnityEngine.Object>;

class CachedItem<T> {
    data?: T;
    time = new Date().getTime();
}

