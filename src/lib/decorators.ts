import { TMPro, UnityEngine } from "csharp";
import { $typeof } from "puerts";
import { BindEventOption, BindOption, BindPropOption, BindViewMode, BindViewOption, META_BINDOPTION } from "./bind_metadata";
import { ComponentMetaData, META_COMPONENT } from "./component_metadata";

/**
 * component decorator
 * @param conf component meta data
 * @returns 
 */
export function component(conf?: ComponentMetaData): ClassDecorator {
    return Reflect.metadata(META_COMPONENT, conf);
}


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

export function text(path: string) {
    return bind(path, { type: $typeof(TMPro.TMP_Text), prop: "text" });
}

export function click(path: string): PropertyDecorator;
export function click(path: string, throttleSeconds: number): PropertyDecorator;
export function click(path: string, throttleSeconds?: number): PropertyDecorator {
    throttleSeconds = throttleSeconds ?? 0;
    return bind(path, { type: $typeof(UnityEngine.UI.Button), event: "onClick", throttleSeconds });
}

export function view(path: string): PropertyDecorator;
export function view(path: string, mode: BindViewMode, extra: unknown): PropertyDecorator;
export function view(path: string, mode?: BindViewMode, extra?: unknown): PropertyDecorator {
    extra = extra ?? {};
    mode = mode ?? BindViewMode.attach;
    return bind(path, { extra, mode });
}
