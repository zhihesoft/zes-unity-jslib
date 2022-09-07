
export const META_PAGE = Symbol("view-meta-page");

export enum Transit {
    None,
    Fade,
}

export interface PageMetaData {
    layer?: string;
    transit?: Transit;
}

export function Page(conf?: PageMetaData): ClassDecorator {
    conf = conf ?? {};
    return Reflect.metadata(META_PAGE, conf);
}

