import { singleton } from "tsyringe";
import { ViewRef } from "../views/view_ref";
import { TransitionFade } from "./transit_fade";
import { Transit, Transition } from "./transit_type";

@singleton()
export class TransitionService {

    constructor() {
        this.transitions.set(Transit.Fade, new TransitionFade());
    }

    private transitions = new Map<number, Transition>();

    async before(type: Transit): Promise<void> {
        const transit = this.transitions.get(type);
        if (transit) {
            await transit.before();
        }
    }

    async after(type: Transit, view: ViewRef) {
        const transit = this.transitions.get(type);
        if (transit) {
            await transit.after(view);
        }
    }
}