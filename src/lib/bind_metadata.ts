import { System } from "csharp";

export const META_BINDOPTION = Symbol("view-meta-bindoption");

export interface BindData {
    path: string;
    option?: BindPropOption | BindEventOption | BindViewOption;
}

export enum BindViewMode {
    attach = 0,
    create,
}

export interface BindOption {
    path: string;
    option?: BindPropOption | BindEventOption | BindViewOption;
}

export interface BindPropOption {
    type: System.Type,
    prop: string,
}

export interface BindEventOption {
    type: System.Type;
    event: "onClick" | "onValueChanged";
    throttleSeconds?: number;
}

export interface BindViewOption {
    mode: BindViewMode;
    extra: unknown;            // extra data, list view 里面是child的constructor
}

