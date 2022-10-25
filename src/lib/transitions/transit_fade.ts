import { assert } from "../utils";
import { ViewRef } from "../views/view_ref";
import { Transition } from "./transit_type";

export class TransitionFade implements Transition {

    async before(): Promise<void> {
        await puer.$promise(CS.Au.Fader.FadeOut(0.2));
    }
    async after(view: ViewRef<unknown>): Promise<void> {
        assert(view);
        await puer.$promise(CS.Au.Fader.FadeIn(0.2));
    }


}