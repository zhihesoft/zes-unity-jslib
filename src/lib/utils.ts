
import { isEmpty } from "lodash";
import { Subject } from "rxjs";
import { Md5 } from "ts-md5";

import GameObject = CS.UnityEngine.GameObject;

/**
 * Empty Function
 */
export const emptyFunc = () => { /** Empty */ };

/**
 * Assert value
 * @param value value to assert
 * @param message error message when failed
 */
export function assert(value: unknown, message?: string): asserts value {
    if (!value) {
        throw new Error(message ?? "value assert failed");
    }
}

/**
 * Get md5 hash of a string
 * @param str string 
 * @returns md5 hash
 */
export function md5(str: string): string {
    return Md5.hashStr(str).toLowerCase();
}

/**
 * Wait for seconds
 * @param seconds 
 * @returns 
 */
export function waitForSeconds(seconds: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

/**
 * Wait until func return true
 * @param func 
 */
export async function waitUntil(func: () => boolean) {
    while (!func()) {
        await waitForSeconds(0);
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
