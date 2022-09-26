import { BindEventOption, BindListViewExtra, BindOption, BindPropOption, BindViewMode, BindViewOption, META_BINDOPTION, RawType } from "./metadata_bind";

export function Bind(path: string, option?: BindPropOption | BindEventOption | BindViewOption): PropertyDecorator {
    return (target, key) => {
        let data: Map<string, BindOption> = Reflect.getMetadata(META_BINDOPTION, target.constructor);
        if (!data) {
            data = new Map();
            Reflect.defineMetadata(META_BINDOPTION, data, target.constructor);
        }
        data.set(String(key), { path, option });
    };
}

export function Prop(path: string, type: RawType, prop = "value") {
    return Bind(path, { type, prop });
}

export function Text(path: string, forTMP = true) {
    if (!forTMP) {
        return Bind(path, { type: CS.UnityEngine.UI.Text, prop: "text" });
    }
    return Bind(path, { type: CS.TMPro.TMP_Text, prop: "text" });
}

export function Click(path: string): PropertyDecorator;
export function Click(path: string, throttleSeconds: number): PropertyDecorator;
export function Click(path: string, throttleSeconds?: number): PropertyDecorator {
    throttleSeconds = throttleSeconds ?? 0;
    return Bind(path, { type: CS.UnityEngine.UI.Button, event: "onClick", throttleSeconds });
}

export function View(path: string): PropertyDecorator;
export function View(path: string, mode: BindViewMode, extra: unknown): PropertyDecorator;
export function View(path: string, mode?: BindViewMode, extra?: unknown): PropertyDecorator {
    extra = extra ?? {};
    mode = mode ?? BindViewMode.attach;
    return Bind(path, { extra, mode });
}

export function ListView(path: string, extra: BindListViewExtra): PropertyDecorator {
    return Bind(path, { mode: BindViewMode.attach, extra });
}