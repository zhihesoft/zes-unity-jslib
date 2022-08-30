import { Zes, UnityEngine } from "csharp";
import { $typeof } from "puerts";
import { ViewHostGO } from "./view_host_go";
import { ViewHostScene } from "./view_host_scene";

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
