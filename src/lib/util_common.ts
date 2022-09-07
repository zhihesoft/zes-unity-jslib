import { UnityEngine } from "csharp";
import { isEmpty } from "lodash";
import { Subject } from "rxjs";
import { Md5 } from "ts-md5";

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

export function isGameObject(obj: unknown): obj is UnityEngine.GameObject {
    return (obj as UnityEngine.GameObject)?.activeSelf != undefined;
}

export function isSubject<T = unknown>(target: unknown): target is Subject<T> {
    if ((target as { subscribe: unknown }).subscribe) {
        return true;
    }
    return false;
}
