
import { isEmpty } from "lodash";
import { Subject } from "rxjs";
import { Md5 } from "ts-md5";

import GameObject = CS.UnityEngine.GameObject;

export function emptyFunc() {
    // empty progress
}

export function md5(str: string): string {
    return Md5.hashStr(str).toLowerCase();
}

export function waitForSeconds(seconds: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

export async function waitUntil(func: () => boolean) {
    while (!func()) {
        await waitForSeconds(0);
    }
}

export function assert(value: unknown, message?: string): asserts value {
    if (!value) {
        throw new Error(message ?? "value assert failed");
    }
}

export function pathCombine(...values: string[]): string {
    if (isEmpty(values)) {
        return "";
    }

    let ret = values[0];
    for (let i = 1; i < values.length; i++) {
        let newline = values[i];
        if (newline.startsWith("/")) {
            newline = newline.substring(1);
        }
        if (!ret.endsWith("/")) {
            ret += "/";
        }
        ret = ret + newline;
    }
    return ret;
}

/**
 * Whether target is a GameObject 
 * @param obj target
 * @returns 
 */
export function isGameObject(obj: unknown): obj is GameObject {
    return (obj as GameObject)?.activeSelf != undefined;
}

/**
 * Whether target is a subject object
 * @param target target
 * @returns 
 */
export function isSubject<T = unknown>(target: unknown): target is Subject<T> {
    if ((target as { subscribe: unknown }).subscribe) {
        return true;
    }
    return false;
}

/**
 * Remove all children in target
 * @param go target
 */
export function removeAllChildren(go: CS.UnityEngine.GameObject) {
    const count = go.transform.childCount;
    for (let i = count - 1; i >= 0; i--) {
        const child = go.transform.GetChild(i);
        CS.UnityEngine.Object.Destroy(child);
    }
}
