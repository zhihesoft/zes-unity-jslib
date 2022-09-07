import { UnityEngine } from "csharp";

/**
 * Options when show a view
 */
export interface ViewOption {
    /**
     * if set, this value will replace the template of component use to intantial a view gameobject.
     */
    template?: string;
    /**
     * the node which host the view
     * if it is null, host will be set for such sequence:
     *   1. a gameobject named 'outlet' in parent
     *   2. parent root gameobject
     */
    node?: symbol | string | UnityEngine.GameObject;    // root node
    /**
     * data for view
     */
    data?: unknown; // any data
}
