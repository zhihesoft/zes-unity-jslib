import { System, UnityEngine, Zes } from "csharp";
import { sum } from "lodash";
import { $promise } from "puerts";
import { assert, emptyFunc, waitUntil } from "./util";

class ResourceLoader {

    private bundles = new Map<string, PendingBundle>();
    private assets = new Map<string, PendingAsset>();
    private scenes2Bundle = new Map<string, string>();
    private assets2Bundle = new Map<string, string>();

    async loadText(path: string): Promise<string> {
        const ret = await $promise(Zes.App.loader.LoadText(path));
        return ret;
    }

    async loadBundles(names: string[], progress: (p: number) => void): Promise<void> {
        const allprogress: number[] = [names.length];
        const ps = names.map((n, i) => this.loadBundle(n, (p) => {
            allprogress[i] = p;
            progress(sum(allprogress) / allprogress.length);
        }));
        await Promise.all(ps);
    }

    async loadBundle(name: string, progress?: (p: number) => void): Promise<void> {
        let item = this.bundles.get(name);
        if (!item) {
            item = new PendingItem<UnityEngine.AssetBundle>();
            this.bundles.set(name, item);
            const bundle = await $promise(Zes.App.loader.LoadBundle(name, progress));
            item.data = bundle;
            item.status = PendingStatus.succ;
            if (bundle.isStreamedSceneAssetBundle) {
                const spaths = bundle.GetAllScenePaths();
                for (let i = 0; i < spaths.Length; i++) {
                    const element = spaths.get_Item(i);
                    this.scenes2Bundle.set(element, name);
                }
            } else {
                const apaths = bundle.GetAllAssetNames();
                for (let i = 0; i < apaths.Length; i++) {
                    const element = apaths.get_Item(i);
                    this.assets2Bundle.set(element, name);
                }
            }
        } else {
            await waitUntil(() => item?.status != PendingStatus.pending);
            if (progress) {
                progress(1);
            }
        }
        item.time = Date.now();
    }

    async loadAsset(path: string, type: System.Type): Promise<UnityEngine.Object> {
        let item = this.assets.get(path);
        if (item) {
            await waitUntil(() => item?.status != PendingStatus.pending);
        } else {
            item = new PendingItem<UnityEngine.Object>();
            const bundlename = this.assets2Bundle.get(path);
            assert(bundlename, `cannot find bundle of ${path}`);
            const bundleitem = this.bundles.get(bundlename);
            assert(bundleitem);
            await waitUntil(() => bundleitem.status != PendingStatus.pending);
            const bundle = bundleitem.data;
            assert(bundle, `bundle is null: ${bundlename}`);
            const asset = await $promise(Zes.App.loader.LoadAsset(bundle, path, type));
            assert(asset, `asset load failed: ${path}`)
            item.data = asset;
            item.status = PendingStatus.succ;
        }
        const ret = item?.data;
        item.time = Date.now();
        assert(ret);
        return ret;
    }

    async loadScene(path: string, additive: boolean, progress?: (p: number) => void): Promise<UnityEngine.SceneManagement.Scene> {
        progress = progress ?? emptyFunc;
        assert(this.scenes2Bundle.get(path), "scene bundle is not loaded");
        const ret = await $promise(Zes.App.loader.LoadScene(path, additive, progress));
        return ret;
    }
}

type PendingBundle = PendingItem<UnityEngine.AssetBundle>;
type PendingAsset = PendingItem<UnityEngine.Object>;

enum PendingStatus {
    pending,
    succ,
    failed,
}

class PendingItem<T> {
    status = PendingStatus.pending;
    time = 0;
    data?: T;
}

export const loader = new ResourceLoader();
