import { assert } from "../util";
import { TweenBase } from "./tween_base";

export class TweenNumberArray extends TweenBase<number[]>{

    protected getStartValue(): number[] {
        return this.target.map(i => i);

    }

    protected doTween(elapse: number): void {
        assert(this.ends, "end values cannot be null");
        for (let i = 0; i < this.target.length; i++) {
            this.target[i] = this.starts[i] + (this.ends[i] - this.starts[i]) * this.getNormalizedElapse(elapse);
        }
    }

}