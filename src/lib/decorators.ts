import { ComponentMetaData, META_COMPONENT } from "./component_metadata";

export const META_BIND = Symbol("view-meta-bind");

/**
 * component decorator
 * @param conf component meta data
 * @returns 
 */
export function component(conf?: ComponentMetaData): ClassDecorator {
    return Reflect.metadata(META_COMPONENT, conf);
}

