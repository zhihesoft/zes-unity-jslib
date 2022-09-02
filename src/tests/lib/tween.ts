import { assert } from "chai";
import { describe } from "mocha";
import { EaseType } from "../../lib/tween/ease_type";
import { tween } from "../../lib/tween/tween";

export function tweenTest() {
    return describe('tween', () => {
        it('tween number', async () => {
            const ret = await tween(100).to(200, 0.5).setEase(EaseType.Smooth).run();
            assert.equal(ret, 200);
        });
        it('tween number array', async () => {
            const ret = await tween([1, 2, 3]).to([100, 200, 300], 0.5).setEase(EaseType.InOutBounce).run();
            assert.equal(ret[0], 100);
            assert.equal(ret[1], 200);
            assert.equal(ret[2], 300);
        });
        it('tween number obj', async () => {
            const ret = await tween({ a: 1, b: 2 }).to({ a: 1000, b: 2000 }, 0.5).setEase(EaseType.InOutElastic).run();
            assert.equal(ret.a, 1000);
            assert.equal(ret.b, 2000);
        });
        it(`tween string`, async () => {
            const target = "a";
            const ret = await tween(target).to("hello world", 0.5).setEase(EaseType.Smoother).run();
            assert.equal(ret, "hello world");
        });
    });
}