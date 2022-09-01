import { assert, waitForSeconds } from "../util";

export interface TweenableSource {
    [index: string]: number;
}

export class Tween<T extends TweenableSource> {
    constructor(
        public target: T
    ) {
        this.starts = {} as T;
        for (const key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                this.starts[key] = target[key];
            }
        }
    }

    public ends?: T;
    public duration = 0; // seconds
    public startTime = 0;

    private starts: T;
    private updateCallback?: (now: T) => void;

    public to(ends: T, duration: number): Tween<T> {
        this.ends = ends;
        this.duration = duration;
        return this;
    }

    public async run(): Promise<void> {
        assert(this.ends, "end values cannot be null");
        if (this.duration <= 0) {
            if (this.updateCallback) {
                this.updateCallback(this.ends!);
            }
            return;
        }

        this.startTime = Date.now();
        let elapse = 0;
        while (elapse < this.duration) {
            this.update(elapse);
            await waitForSeconds(0);
            elapse = (Date.now() - this.startTime) / 1000;
        }
        this.update(this.duration);
    }

    public onUpdate(action: (now: T) => void): Tween<T> {
        this.updateCallback = action;
        return this;
    }

    protected update(elapse: number) {
        assert(this.ends, "end values cannot be null");
        for (const key in this.starts) {
            if (Object.prototype.hasOwnProperty.call(this.starts, key)) {
                const start = this.starts[key];
                const end = this.ends[key];
                if (this.duration <= 0) {
                    this.target[key] = this.ends[key];
                } else {
                    (this.target as any)[key] = start + (end - start) * (elapse / this.duration);
                }
            }
        }

        if (this.updateCallback) {
            this.updateCallback(this.target);
        }
    }

}