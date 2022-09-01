import { UnityEngine } from "csharp";
import { singleton } from "tsyringe";
import { assert } from "../util";

/**
 * Layer Service
 */
@singleton()
export class LayerService {

    private defaultLayerName = "main";
    private layers = new Map<string, UnityEngine.GameObject>();

    add(name: string, go: UnityEngine.GameObject) {
        this.layers.set(name, go);
    }

    get(name: string): UnityEngine.GameObject {
        const ret = this.layers.get(name);
        assert(ret, `cannot find layer of ${this.defaultLayer}`);
        return ret;
    }

    get defaultLayer(): UnityEngine.GameObject {
        return this.get(this.defaultLayerName);
    }
}