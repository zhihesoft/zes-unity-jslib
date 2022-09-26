import { singleton } from "tsyringe";
import { assert } from "../util_common";

import GameObject = CS.UnityEngine.GameObject;

/**
 * Layer Service
 */
@singleton()
export class LayerService {

    private defaultLayerName = "main";
    private layers = new Map<string, GameObject>();

    add(name: string, go: GameObject) {
        this.layers.set(name, go);
    }

    get(name: string): GameObject {
        const ret = this.layers.get(name);
        assert(ret, `cannot find layer of ${name}`);
        return ret;
    }

    get defaultLayer(): GameObject {
        return this.get(this.defaultLayerName);
    }
}
