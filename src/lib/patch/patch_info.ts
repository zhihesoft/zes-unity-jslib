export interface PatchFileInfo {
    path: string;
    md5: string;
    size: number;
}

export interface PatchInfo {
    version: string;
    url: string;
    files: PatchFileInfo[];
}