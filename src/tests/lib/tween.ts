import { assert } from "chai";
import { describe } from "mocha";
import { tween, tweenString } from "../../lib/tween/tween";

export function tweenTest() {
    return describe('tween', () => {
        it('tween number', async () => {
            const target = { a: 100 };
            await tween(target).to({ a: 200 }, 0.5).run();
            assert.equal(target.a, 200);
        });
        it(`tween string`, async () => {
            const target = "a";
            const ret = await tweenString(target).to("hello world", 0.5).run();
            assert.equal(ret, "hello world");
        });
    });
}