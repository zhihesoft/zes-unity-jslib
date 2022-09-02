import { assert } from "../util";
import { TweenBase } from "./tween_base";

export class TweenNumber extends TweenBase<number> {

    protected getStartValue(): number {
        return this.target;
    }

    protected doTween(elapse: number): void {
        assert(this.ends, "end values cannot be null");
        if (this.duration <= 0) {
            this.target = this.ends;
        } else {
            this.target = this.starts + (this.ends - this.starts) * (elapse / this.duration);
        }
    }
}