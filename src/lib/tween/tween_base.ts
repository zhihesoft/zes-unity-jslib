import { waitForSeconds } from "../utils";
import { easeFunctions } from "./ease_functions";
import { EaseType } from "./ease_type";

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

    private ease: EaseType = EaseType.Linear;
    private updateCallback?: (now: T) => void;
    private cancel = false;

    public to(ends: T, duration: number) {
        this.ends = ends;
        this.duration = duration;
        return this;
    }

    public setEase(type: EaseType) {
        this.ease = type;
        return this;
    }

    public async run(): Promise<T> {
        this.startTime = Date.now();
        let elapse = 0;
        while (elapse < this.duration) {
            if (this.cancel) {
                return this.target;
            }
            this.update(elapse);
            await waitForSeconds(0);
            elapse = (Date.now() - this.startTime) / 1000;
        }
        this.update(this.duration);
        return this.target;
    }

    public stop() {
        this.cancel = true;
    }

    public onUpdate(action: (now: T) => void): TweenBase<T> {
        this.updateCallback = action;
        return this;
    }

    protected abstract getStartValue(): T;
    protected abstract doTween(elapse: number): void;

    protected update(elapse: number) {
        this.doTween(elapse);
        if (this.updateCallback) {
            this.updateCallback(this.target);
        }
    }

    protected getNormalizedElapse(elapse: number) {
        if (this.duration <= 0) {
            return 1;
        }
        const value = elapse / this.duration;
        const func = easeFunctions.get(this.ease);
        if (!func) {
            return value;
        }
        return func(value);
    }

}