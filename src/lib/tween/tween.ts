import { Tween, TweenableSource } from "./tween_base";

export function tween<T extends TweenableSource>(source: T): Tween<T> {
    return new Tween(source);
}

