import { EaseFunc, EaseType } from "./ease_type";

function easeLinear(value: number): number {
    return value;
}

function easeSmooth(value: number): number {
    return value * value * (3 - 2 * value);
}

function easeSmoother(value: number): number {
    return (value * value * value * (value * (value * 6 - 15) + 10));
}

function easeSquared(value: number): number {
    return value * value;
}

function easeInvSquared(value: number): number {
    return 1 - (1 - value) * (1 - value);
}

export const easeFunctions: Map<EaseType, EaseFunc> = new Map([
    [EaseType.Linear, easeLinear],
    [EaseType.Smooth, easeSmooth],
    [EaseType.Smoother, easeSmoother],
    [EaseType.Squared, easeSquared],
    [EaseType.InvSquared, easeInvSquared],
]);