import { EaseFunc, EaseType } from "./ease_type";

const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;
const pow = Math.pow;
const sqrt = Math.sqrt;

function easeOutBounce(x: number): number {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}


export const easeFunctions: Map<EaseType, EaseFunc> = new Map([
    [EaseType.Linear, x => x],

    [EaseType.Smooth, x => x * x * (3 - 2 * x)],
    [EaseType.Smoother, x => (x * x * x * (x * (x * 6 - 15) + 10))],

    [EaseType.InSine, x => 1 - cos((x * PI) / 2)],
    [EaseType.OutSine, x => sin((x * PI) / 2)],
    [EaseType.InOutSine, x => -(cos(PI * x) - 1) / 2],

    [EaseType.InQuad, x => x * x],
    [EaseType.OutQuad, x => 1 - (1 - x) * (1 - x)],
    [EaseType.InOutQuad, x => x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2],

    [EaseType.InCubic, x => x * x * x],
    [EaseType.OutCubic, x => 1 - pow(1 - x, 3)],
    [EaseType.InOutCubic, x => x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2],

    [EaseType.InQuart, x => x * x * x * x],
    [EaseType.OutQuart, x => 1 - pow(1 - x, 4)],
    [EaseType.InOutQuart, x => x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2],

    [EaseType.InExpo, x => x === 0 ? 0 : pow(2, 10 * x - 10)],
    [EaseType.OutExpo, x => x === 1 ? 1 : 1 - pow(2, -10 * x)],
    [EaseType.InOutExpo, x => x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5 ? pow(2, 20 * x - 10) / 2
                : (2 - pow(2, -20 * x + 10)) / 2],

    [EaseType.InCirc, x => 1 - sqrt(1 - pow(x, 2))],
    [EaseType.OutCirc, x => sqrt(1 - pow(x - 1, 2))],
    [EaseType.InOutCirc, x => x < 0.5
        ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
        : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2],

    [EaseType.InBack, x => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return c3 * x * x * x - c1 * x * x;
    }],
    [EaseType.OutBack, x => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    }],
    [EaseType.InOutBack, x => {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
        return x < 0.5
            ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
            : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    }],

    [EaseType.InElastic, x => {
        const c4 = (2 * Math.PI) / 3;
        return x === 0
            ? 0
            : x === 1
                ? 1
                : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    }],
    [EaseType.OutElastic, x => {
        const c4 = (2 * Math.PI) / 3;
        return x === 0
            ? 0
            : x === 1
                ? 1
                : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    }],
    [EaseType.InOutElastic, x => {
        const c5 = (2 * Math.PI) / 4.5;
        return x === 0
            ? 0
            : x === 1
                ? 1
                : x < 0.5
                    ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
                    : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    }],

    [EaseType.InBounce, x => 1 - easeOutBounce(1 - x)],
    [EaseType.OutBounce, x => easeOutBounce(x)],
    [EaseType.InOutBounce, x => x < 0.5
        ? (1 - easeOutBounce(1 - 2 * x)) / 2
        : (1 + easeOutBounce(2 * x - 1)) / 2],

]);