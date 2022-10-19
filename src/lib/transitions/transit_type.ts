import { ViewRef } from "../views/view_ref";

export enum Transit {
    None,
    Fade = 1,  // fade view
}

export interface Transition {
    before(): Promise<void>;
    after(view: ViewRef): Promise<void>;
}
