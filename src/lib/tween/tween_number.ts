import { assert } from "../util";
import { TweenBase } from "./tween_base";

export class TweenNumber extends TweenBase<number> {

    protected getStartValue(): number {
        return this.target;
    }

    protected doTween(elapse: number): void {
        assert(this.ends != undefined, "end values cannot be null");
        this.target = this.starts + (this.ends - this.starts) * this.getNormalizedElapse(elapse);
    }
}