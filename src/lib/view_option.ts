import { UnityEngine } from "csharp";

export interface ViewOption {
    template?: string;  // override template
    node?: symbol | string | UnityEngine.GameObject;    // root node
    data?: unknown; // any data
}
