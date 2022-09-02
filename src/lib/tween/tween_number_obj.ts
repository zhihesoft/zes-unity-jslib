import { assert } from "../util";
import { TweenBase } from "./tween_base";

export interface NumberObj {
    [index: string]: number;
}

export class TweenNumberObj extends TweenBase<NumberObj> {
    protected getStartValue(): NumberObj {
        const ret: NumberObj = {};
        for (const key in this.target) {
            if (Object.prototype.hasOwnProperty.call(this.target, key)) {
                ret[key] = this.target[key];
            }
        }
        return ret;
    }

    protected doTween(elapse: number): void {
        assert(this.ends, "end values cannot be null");

        for (const key in this.starts) {
            if (Object.prototype.hasOwnProperty.call(this.starts, key)) {
                const start = this.starts[key];
                const end = this.ends[key];
                this.target[key] = start + (end - start) * this.getNormalizedElapse(elapse);
            }
        }
    }

}