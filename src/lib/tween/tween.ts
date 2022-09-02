import { TweenNumber } from "./tween_number";
import { TweenNumberArray } from "./tween_number_array";
import { NumberObj, TweenNumberObj } from "./tween_number_obj";
import { TweenString } from "./tween_string";

export function tween(value: NumberObj): TweenNumberObj;
export function tween(value: number): TweenNumber;
export function tween(value: string): TweenString;
export function tween(value: number[]): TweenNumberArray;
export function tween(value: number | string | number[] | NumberObj) {
    if (typeof value == "number") {
        return new TweenNumber(value);
    } else if (typeof value == "string") {
        return new TweenString(value);
    } else if (Array.isArray(value)) {
        return new TweenNumberArray(value);
    } else {
        return new TweenNumberObj(value);
    }
}
