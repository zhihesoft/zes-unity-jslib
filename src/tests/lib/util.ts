import { assert } from "chai";
import { describe } from "mocha";
import { pathCombine } from "../../lib/util_common";

export function utilTest() {
    return describe(`util`, () => {
        it("pathCombine", async () => {
            assert.equal(pathCombine("http://t1/", "t2", "/t3/", "t4/"), "http://t1/t2/t3/t4/");
            assert.equal(pathCombine("t1/", "t2", "/t3/", "t4/"), "t1/t2/t3/t4/");
        });
    });
}