import { constructor } from "tsyringe/dist/typings/types";

/**
 * Bind View Mode
 */
export enum BindViewMode {
    attach = 0,
    create,
}

export const META_BINDOPTION = Symbol("view-meta-bindoption");

export interface BindMetaData {
    path: string;
    option?: BindPropOption | BindEventOption | BindViewOption;
}

export interface BindPropOption {
    type: constructor<unknown>,
    prop: string,
}

export interface BindEventOption {
    type: constructor<unknown>;
    event: "onClick" | "onValueChanged";
    throttleSeconds?: number;
}

export interface BindViewOption {
    mode: BindViewMode;
    extra: unknown;            // extra data, list view 里面是child的constructor
}

export interface BindListViewExtra<T = unknown> {
    itemClass: constructor<T>;
    template?: string;
    outlet?: string;
}
