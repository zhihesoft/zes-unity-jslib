import { isEmpty } from "lodash";
import { assert } from "../utils";
import GameObject = CS.UnityEngine.GameObject;
import Scene = CS.UnityEngine.SceneManagement.Scene;

/**
 * ViewRef host node
 * It will be a GameObject or Scene
 */
export abstract class ViewHost {

    static create(target: GameObject | Scene): ViewHost {
        if ((target as Scene).GetRootGameObjects != undefined) {
            return new ViewHostScene(target as Scene);
        } else {
            return new ViewHostGO(target as GameObject);
        }
    }

    protected tags?: CS.Au.Tags;

    abstract find(path: string): GameObject;
    abstract exists(path: string): boolean;
    abstract setActive(active: boolean): void;
    abstract destroy(): Promise<void>;
    abstract get isSceneHost(): boolean;
    abstract get root(): GameObject;

    protected findByTag(root: GameObject, tag: string): GameObject | undefined {
        if (!this.tags) {
            this.tags = root.GetComponent(puer.$typeof(CS.Au.Tags)) as CS.Au.Tags;
            if (!this.tags) {
                return undefined;
            }
        }
        const go = this.tags.Get(tag);
        return go;
    }
}


class ViewHostGO extends ViewHost {
    constructor(
        public gameObject: GameObject,
    ) { super(); }

    get isSceneHost(): boolean { return false; }

    get root(): GameObject { return this.gameObject; }

    exists(path: string): boolean {
        if (isEmpty(path)) {
            return true;
        }
        if (path.startsWith("#")) {
            const go = this.findByTag(this.gameObject, path.substring(1));
            return go != null;
        } else {
            const trans = this.gameObject.transform.Find(path);
            return trans != null;
        }
    }

    find(path: string): GameObject {
        if (isEmpty(path)) {
            return this.gameObject;
        }

        if (path.startsWith("#")) {
            const go = this.findByTag(this.gameObject, path.substring(1));
            assert(go, `cannot find tag of (${path}).`)
            return go;
        } else {
            const trans = this.gameObject.transform.Find(path);
            assert(trans, `cannot find transform of path (${path}).`);
            return trans.gameObject;
        }
    }

    async destroy() {
        if (this.gameObject) {
            GameObject.Destroy(this.gameObject);
        }
    }

    setActive(active: boolean): void {
        this.gameObject.SetActive(active);
    }

}

class ViewHostScene extends ViewHost {
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
    get root(): GameObject { return this.rootGameObjects[0]; }

    exists(path: string): boolean {
        if (isEmpty(path)) {
            return true;
        }
        if (path.startsWith("#")) {
            const go = this.findByTag(this.rootGameObjects[0], path.substring(1));
            return go != null;
        } else {
            const trans = this.rootGameObjects[0].transform.Find(path);
            return trans != null;
        }
    }

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

    async destroy() {
        await puer.$promise(CS.Au.AssetSet.UnloadScene(this.scene));
    }

    setActive(): void {
        // nothing to do
    }

}

