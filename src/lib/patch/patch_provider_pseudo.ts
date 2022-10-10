import { tween } from "../tween/tween";
import { waitForSeconds } from "../util_common";
import { PatchProvider } from "./patch_provider";
import { PatchStatus } from "./patch_status";

export class PatchProviderPseudo implements PatchProvider {
    private count = 0;

    async check(): Promise<PatchStatus> {
        if (this.count == 0) {
            this.count++;
            return PatchStatus.Extract;
        } else if (this.count == 1) {
            this.count++;
            return PatchStatus.Found;
        }
        this.count = 0;
        return PatchStatus.None;
    }

    async extract() {
        await waitForSeconds(1);
    }

    async patch(progress: (p: number) => void) {
        await tween(0).to(1, 2).onUpdate(progress).run();
    }
}