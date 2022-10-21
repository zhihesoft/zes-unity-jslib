import { Transit } from "../transitions/transit_type";

export const META_COMPONENT = Symbol("view-meta-component");

/**
 * Component metadata
 */
export interface ComponentMetaData {
    template?: string;  // component template
    layer?: string;     // component layer in parent view
    outlet?: string;    // component outlet for children
    transit?: Transit;  // transition type
    data?: unknown;     // extra data
}