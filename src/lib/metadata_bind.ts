import { constructor } from "tsyringe/dist/typings/types";

// this is raw type from c#
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RawType = new (...args: any[]) => any;

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
    type: RawType,
    prop: string,
}

export interface BindEventOption {
    type: RawType;
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
}
