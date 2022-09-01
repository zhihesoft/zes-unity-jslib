import { TweenNumber, TweenNumberTarget } from "./tween_number";
import { TweenString } from "./tween_string";

export function tween<T extends TweenNumberTarget>(source: T): TweenNumber<T> {
    return new TweenNumber(source);
}

export function tweenString(value: string): TweenString {
    return new TweenString(value);
}

