
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
