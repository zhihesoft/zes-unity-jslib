import { assert } from "../util";
import { TweenBase } from "./tween_base";

export interface TweenNumberTarget {
    [index: string]: number;
}

export class TweenNumber<T extends TweenNumberTarget> extends TweenBase<T> {

    protected getStartValue(): T {
        const starts = {} as T;
        for (const key in this.target) {
            if (Object.prototype.hasOwnProperty.call(this.target, key)) {
                starts[key] = this.target[key];
            }
        }
        return starts;
    }

    protected doTween(elapse: number): void {
        assert(this.ends, "end values cannot be null");
        for (const key in this.starts) {
            if (Object.prototype.hasOwnProperty.call(this.starts, key)) {
                const start = this.starts[key];
                const end = this.ends[key];
                if (this.duration <= 0) {
                    this.target[key] = this.ends[key];
                } else {
                    (this.target as TweenNumberTarget)[key] = start + (end - start) * (elapse / this.duration);
                }
            }
        }
    }
}