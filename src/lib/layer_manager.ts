import { UnityEngine } from "csharp";

export class LayerManager {

    layers = new Map<string, UnityEngine.GameObject>();

    add(name: string, go: UnityEngine.GameObject) {
        this.layers.set(name, go);
    }

    get(name: string): UnityEngine.GameObject | undefined {
        return this.layers.get(name);
    }
}