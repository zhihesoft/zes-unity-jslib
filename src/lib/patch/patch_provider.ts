import { PatchProviderPseudo } from "./patch_provider_pseudo";
import { PatchProviderRuntime } from "./patch_provider_runtime";
import { PatchStatus } from "./patch_status";

export interface PatchProvider {
    check(): Promise<PatchStatus>;
    extract(): Promise<void>;
    patch(progress: (p: number) => void): Promise<void>
}

export function getPatcher(): PatchProvider {
    if (Zes.App.inEditor) {
        return new PatchProviderPseudo();
    } else {
        return new PatchProviderRuntime();
    }
}
