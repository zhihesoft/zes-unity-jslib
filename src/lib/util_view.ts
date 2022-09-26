import { BindEventOption, BindPropOption, BindViewOption } from "./metadata/metadata_bind";
import { ViewHost } from "./view_host";
import GameObject = CS.UnityEngine.GameObject;

export function isViewHost(obj: ViewHost | GameObject): obj is ViewHost {
    return (<ViewHost>obj).isSceneHost != undefined;
}

export function isPropOption(opt: BindPropOption | BindEventOption | BindViewOption): opt is BindPropOption {
    return ((<BindPropOption>opt).prop != undefined);
}

export function isEventOption(opt: BindPropOption | BindEventOption | BindViewOption): opt is BindEventOption {
    return ((<BindEventOption>opt).event != undefined);
}

export function isViewOption(opt: BindPropOption | BindEventOption | BindViewOption): opt is BindViewOption {
    return ((<BindViewOption>opt).mode != undefined);
}



