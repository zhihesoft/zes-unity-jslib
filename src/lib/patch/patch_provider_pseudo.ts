import { waitForSeconds } from "../util";
import { PatchProvider } from "./patchprovider";
import { PatchStatus } from "./patchstatus";

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
        return PatchStatus.None;
    }

    async extract() {
        await waitForSeconds(1);
    }

    async patch(progress: (p: number) => void) {
        for (let i = 0; i < 100; i++) {
            progress(i * 0.01);
            await waitForSeconds(0.01);
        }
        progress(1);
    }
}