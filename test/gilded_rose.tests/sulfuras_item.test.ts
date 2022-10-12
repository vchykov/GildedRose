import { expectItemUpdate } from "./utils/expect_item_update";

describe("Sulfuras", function () {
    describe("якість завжди дорівнює 80", function () {
        it("термін придатності не змінюється", function () {
            expectItemUpdate("Sulfuras, Hand of Ragnaros", 0, 80, 0, 80);
        });
        it("термін придатності не змінюється", function () {
            expectItemUpdate("Sulfuras, Hand of Ragnaros", -1, 80, -1, 80);
        });
    });
});
