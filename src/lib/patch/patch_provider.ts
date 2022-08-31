import { PatchStatus } from "./patch_status";

export interface PatchProvider {
    check(): Promise<PatchStatus>;
    extract(): Promise<void>;
    patch(progress: (p: number) => void): Promise<void>
}
