import { assert } from "../util";
import { TweenBase } from "./tween_base";

export class TweenString extends TweenBase<string> {

    protected getStartValue(): string {
        return this.target + "";
    }

    protected doTween(elapse: number): void {
        assert(this.ends);

        if (this.duration <= 0) {
            this.target = this.ends;
        } else {
            const start = this.starts.length;
            const end = this.ends.length;
            const len = Math.floor(start + (end - start) * (elapse / this.duration));
            this.target = this.ends.substring(0, len);
        }

    }

}