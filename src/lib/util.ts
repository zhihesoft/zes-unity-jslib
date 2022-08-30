import { UnityEngine } from "csharp";

export function emptyFunc() {
    // empty progress
}

export function waitForSeconds(seconds: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

export function isGameObject(obj: unknown): obj is UnityEngine.GameObject {
    return (<UnityEngine.GameObject>obj).activeSelf != undefined;
}

export function assert(value: unknown, message?: string): asserts value {
    if (!value) {
        throw new Error(message ?? "value assert failed");
    }
}

export async function waitUntil(func: () => boolean) {
    while (!func()) {
        await waitForSeconds(0);
    }
}
