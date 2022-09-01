import "reflect-metadata";
import { tweenTest } from "./lib/tween";
import { utilTest } from "./lib/util";

describe(`test suit`, () => {
    utilTest();
    tweenTest();
});

