import { singleton } from "tsyringe";
import { waitForSeconds } from "../util";

@singleton()
export class FadeService {
    async out(): Promise<void> {
        await waitForSeconds(1);
    }

    async in(): Promise<void> {
        await waitForSeconds(1);
    }
}