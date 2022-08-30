import "reflect-metadata";
import { UnityEngine } from "csharp";
import { constructor } from "tsyringe/dist/typings/types";

import GameObject = UnityEngine.GameObject;
import Transform = UnityEngine.Transform;
import { ComponentMetaData, META_COMPONENT } from "./component_metadata";
import { container, DependencyContainer } from "tsyringe";
import { ViewHost } from "./view_host";

export const VIEW_DATA_SYMBOL = Symbol("VIEW_DATA");


export class ViewRef<T = unknown> {

    constructor(
        public componentClass: constructor<T>,
        public parent: ViewRef
    ) {
        this.componentMeta = Reflect.getMetadata(META_COMPONENT, componentClass);
        if (parent) {
            this.container = parent.container.createChildContainer();
        } else {
            this.container = container;
        }
    }

    public readonly componentMeta?: ComponentMetaData;
    public readonly container: DependencyContainer;
    public get host() { return this._host; }
    public get component() { return this._component; }
    public get disposed() { return this._disposed; }

    private _host?: ViewHost;
    private _component?: T;
    private _disposed = false;
    private _children: ViewRef[] = [];


}
