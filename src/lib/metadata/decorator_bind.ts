import { constructor } from "tsyringe/dist/typings/types";
import { BindEventOption, BindListViewExtra, BindMetaData, BindPropOption, BindViewMode, BindViewOption, META_BINDOPTION } from "./metadata_bind";

export function bind(path: string, option?: BindPropOption | BindEventOption | BindViewOption): PropertyDecorator {
    return (target, key) => {
        let data: Map<string, BindMetaData> = Reflect.getMetadata(META_BINDOPTION, target.constructor);
        if (!data) {
            data = new Map();
            Reflect.defineMetadata(META_BINDOPTION, data, target.constructor);
        }
        data.set(String(key), { path, option });
    };
}

export function prop(path: string, type: constructor<unknown>, prop = "value") {
    return bind(path, { type, prop });
}

export function text(path: string, forTMP = true) {
    if (!forTMP) {
        return bind(path, { type: CS.UnityEngine.UI.Text, prop: "text" });
    }
    return bind(path, { type: CS.TMPro.TMP_Text, prop: "text" });
}

export function click(path: string): PropertyDecorator;
export function click(path: string, throttleSeconds: number): PropertyDecorator;
export function click(path: string, throttleSeconds?: number): PropertyDecorator {
    throttleSeconds = throttleSeconds ?? 0;
    return bind(path, { type: CS.UnityEngine.UI.Button, event: "onClick", throttleSeconds });
}

export function view(path: string): PropertyDecorator;
export function view(path: string, mode: BindViewMode, extra: unknown): PropertyDecorator;
export function view(path: string, mode?: BindViewMode, extra?: unknown): PropertyDecorator {
    extra = extra ?? {};
    mode = mode ?? BindViewMode.attach;
    return bind(path, { extra, mode });
}

export function listView<T>(path: string, extra: BindListViewExtra<T>): PropertyDecorator {
    return bind(path, { mode: BindViewMode.attach, extra });
}