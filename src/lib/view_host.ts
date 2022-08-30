import { Zes, UnityEngine } from "csharp";
import { isEmpty } from "lodash";
import { $typeof } from "puerts";

import GameObject = UnityEngine.GameObject;
import Scene = UnityEngine.SceneManagement.Scene;

export abstract class ViewHost {
    static create(target: GameObject | Scene): ViewHost {
        if ((<Scene>target).GetRootGameObjects != undefined) {
            return new ViewHostScene(<Scene>target);
        } else {
            return new ViewHostGO(<GameObject>target);
        }
    }

    protected tags?: Zes.Tags;

    abstract find(path: string): GameObject;
    abstract setActive(active: boolean): void;
    abstract destroy(cleanup: boolean): void;
    abstract get isSceneHost(): boolean;

    protected findByTag(root: GameObject, tag: string): GameObject | undefined {
        if (!this.tags) {
            this.tags = root.GetComponent($typeof(Zes.Tags)) as Zes.Tags;
            if (!this.tags) {
                return undefined;
            }
        }
        const go = this.tags.GetTag(tag);
        return go;
    }
}


export class ViewHostGO extends ViewHost {
    constructor(
        public gameObject: UnityEngine.GameObject,
    ) { super(); }

    get isSceneHost(): boolean { return false; }

    find(path: string): UnityEngine.GameObject {
        if (isEmpty(path)) {
            return this.gameObject;
        }

        if (path.startsWith("#")) {
            const go = this.findByTag(this.gameObject, path.substring(1));
            if (!go) {
                throw new Error(`cannot find tag of (${path}).`);
            }
            return go;
        } else {
            const trans = this.gameObject.transform.Find(path);
            if (!trans) {
                throw new Error(`cannot find transform of path (${path}).`);
            }
            return trans.gameObject;
        }
    }

    destroy(cleanup: boolean): void {
        if (this.gameObject && cleanup) {
            UnityEngine.GameObject.Destroy(this.gameObject);
        }
    }

    setActive(active: boolean): void {
        this.gameObject.SetActive(active);
    }

}

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

