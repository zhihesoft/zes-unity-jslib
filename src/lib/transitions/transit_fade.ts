import { container } from "tsyringe";
import { FadeService } from "../services/fade_service";
import { assert } from "../util_common";
import { ViewRef } from "../view_ref";
import { Transition } from "./transit_type";

export class TransitionFade implements Transition {

    async before(): Promise<void> {
        const fade = container.resolve(FadeService);
        await fade.out();
    }
    async after(view: ViewRef<unknown>): Promise<void> {
        assert(view);
        const fade = container.resolve(FadeService);
        await fade.in();
    }


}