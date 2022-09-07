import { injectable } from "tsyringe";
import { ComponentMetaData, META_COMPONENT } from "./metadata_component";

/**
 * component decorator
 * @param conf component meta data
 * @returns 
 */
export function Component(conf?: ComponentMetaData): ClassDecorator {
    return (ctor) => {
        Reflect.metadata(META_COMPONENT, conf)(ctor);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        injectable()(ctor as any);
    }
}
