import { UnityEngine } from "csharp";
import { isEmpty } from "lodash";
import { ViewHost } from "./view_host";


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
