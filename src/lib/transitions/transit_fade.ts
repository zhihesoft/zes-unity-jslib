import { App } from "../app";
import { FadeService } from "../services/fade_service";
import { assert } from "../utils";
import { ViewRef } from "../views/view_ref";
import { Transition } from "./transit_type";

export class TransitionFade implements Transition {

    async before(): Promise<void> {
        const fade = App.container.resolve(FadeService);
        await fade.out();
    }
    async after(view: ViewRef<unknown>): Promise<void> {
        assert(view);
        const fade = App.container.resolve(FadeService);
        await fade.in();
    }


}