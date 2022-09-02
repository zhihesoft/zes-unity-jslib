import { assert, waitForSeconds } from "../util";

export abstract class TweenBase<T> {
    constructor(
        public target: T
    ) {
        this.starts = this.getStartValue();
    }

    public starts: T;
    public ends?: T;
    public duration = 0; // seconds
    public startTime = 0;

    private updateCallback?: (now: T) => void;

    public to(ends: T, duration: number) {
        this.ends = ends;
        this.duration = duration;
        return this;
    }

    public async run(): Promise<T> {
        assert(this.ends, "end values cannot be null");
        this.startTime = Date.now();
        let elapse = 0;
        while (elapse < this.duration) {
            this.update(elapse);
            await waitForSeconds(0);
            elapse = (Date.now() - this.startTime) / 1000;
        }
        this.update(this.duration);
        return this.target;
    }

    public onUpdate(action: (now: T) => void): TweenBase<T> {
        this.updateCallback = action;
        return this;
    }

    protected abstract getStartValue(): T;
    protected abstract doTween(elapse: number): void;

    protected update(elapse: number) {
        assert(this.ends, "end values cannot be null");
        this.doTween(elapse);
        if (this.updateCallback) {
            this.updateCallback(this.target);
        }
    }

}