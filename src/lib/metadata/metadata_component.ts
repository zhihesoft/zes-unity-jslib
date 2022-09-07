import { Transit } from "../transitions/transit_type";

export const META_COMPONENT = Symbol("view-meta-component");

export interface ComponentMetaData {
    template?: string;
    layer?: string;
    transit?: Transit;
}