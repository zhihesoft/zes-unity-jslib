import { ViewHost } from "./view_host";
import { Zes, UnityEngine } from "csharp";

import Scene = UnityEngine.SceneManagement.Scene;
import GameObject = UnityEngine.GameObject;
import { isEmpty } from "lodash";

export class ViewHostScene extends ViewHost {
    constructor(
        public scene: Scene,
    ) {
        super();
        const gos = scene.GetRootGameObjects();
        for (let i = 0; i < gos.Length; i++) {
            this.rootGameObjects.push(gos.get_Item(i));
        }
    }
    private rootGameObjects: GameObject[] = [];

    get isSceneHost(): boolean { return true; }

    find(path: string): GameObject {
        if (path.startsWith("#")) {
            const taggo = this.findByTag(this.rootGameObjects[0], path.substring(1));
            if (!taggo) {
                throw new Error(`cannot find transform of path (${path}) in scene.`);
            }
            return taggo;
        }

        let first = path;
        let second = "";
        const idx = path.indexOf(`/`);
        if (idx >= 0) {
            first = path.substring(0, idx);
            second = path.substring(idx + 1);
        }

        const root = this.rootGameObjects.find(i => i.name == first);
        if (!root) {
            throw new Error(`cannot find transform of path (${path}) in scene.`);
        }

        if (isEmpty(second)) {
            return root;
        }

        const trans = root.transform.Find(second);
        if (!trans) {
            throw new Error(`cannot find transform of path (${path}).`);
        }
        return trans.gameObject;
    }

    destroy(cleanup: boolean): void {
        if (cleanup) {
            Zes.App.loader.UnloadScene(this.scene);
        }
    }

    setActive(): void {
        // nothing to do
        // logger.debug(`scene set active ${active}`);
    }

}
