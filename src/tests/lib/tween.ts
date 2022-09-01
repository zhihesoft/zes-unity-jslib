import { assert } from "chai";
import { describe } from "mocha";
import { tween } from "../../lib/tween/tween";

export function tweenTest() {
    return describe('tween', () => {
        it('tween base', async () => {
            const target = { a: 100 };
            await tween(target).to({ a: 200 }, 0.5).run();
            assert.equal(target.a, 200);
        });
    });
}