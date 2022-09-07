import { assert } from "../util_common";
import { TweenBase } from "./tween_base";

export class TweenString extends TweenBase<string> {

    protected getStartValue(): string {
        return this.target + "";
    }

    protected doTween(elapse: number): void {
        assert(this.ends);
        const start = this.starts.length;
        const end = this.ends.length;
        const len = Math.floor(start + (end - start) * this.getNormalizedElapse(elapse));
        this.target = this.ends.substring(0, len);
    }
}