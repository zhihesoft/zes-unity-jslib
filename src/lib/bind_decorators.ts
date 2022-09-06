import { TMPro, UnityEngine } from "csharp";
import { BindEventOption, BindListViewExtra, BindOption, BindPropOption, BindViewMode, BindViewOption, META_BINDOPTION, RawType } from "./metadata_bind";


export function bind(path: string, option?: BindPropOption | BindEventOption | BindViewOption): PropertyDecorator {
    return (target, key) => {
        let data: Map<string, BindOption> = Reflect.getMetadata(META_BINDOPTION, target.constructor);
        if (!data) {
            data = new Map();
            Reflect.defineMetadata(META_BINDOPTION, data, target.constructor);
        }
        data.set(String(key), { path, option });
    };
}

export function bindValue(path: string, type: RawType) {
    return bind(path, { type, prop: "value" });
}

export function text(path: string) {
    return bind(path, { type: TMPro.TMP_Text, prop: "text" });
}

export function click(path: string): PropertyDecorator;
export function click(path: string, throttleSeconds: number): PropertyDecorator;
export function click(path: string, throttleSeconds?: number): PropertyDecorator {
    throttleSeconds = throttleSeconds ?? 0;
    return bind(path, { type: UnityEngine.UI.Button, event: "onClick", throttleSeconds });
}

export function view(path: string): PropertyDecorator;
export function view(path: string, mode: BindViewMode, extra: unknown): PropertyDecorator;
export function view(path: string, mode?: BindViewMode, extra?: unknown): PropertyDecorator {
    extra = extra ?? {};
    mode = mode ?? BindViewMode.attach;
    return bind(path, { extra, mode });
}

export function listView(path: string, extra: BindListViewExtra): PropertyDecorator {
    return bind(path, { mode: BindViewMode.attach, extra });
}