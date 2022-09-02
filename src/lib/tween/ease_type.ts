export enum EaseType {
    Linear,
    Smooth,
    Smoother,
    Squared,
    InvSquared,
}

export type EaseFunc = (value: number) => number;
