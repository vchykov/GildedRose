import { expectItemUpdate } from "./utils/expect_item_update";

describe("Conjured Mana Cake", function () {
    describe("з позитивним терміном придатності", function () {
        it("Зменшує якість на -2 при позитивній якості, яка більше 2", function () {
            expectItemUpdate("Conjured Mana Cake", 10, 20, 9, 18);
        });
        it("Зменшує якість на -1 при позитивній якості, яка дорівнює 1", function () {
            expectItemUpdate("Conjured Mana Cake", 10, 1, 9, 0);
        });
        it("Не змінює якість при нульовій якості", function () {
            expectItemUpdate("Conjured Mana Cake", 10, 0, 9, 0);
        });
    });
    describe("при вичерпанні терміну придатності", function () {
        it("Зменшує якість на -2 при позитивному терміні зберігання", function () {
            expectItemUpdate("Conjured Mana Cake", 1, 20, 0, 18);
        });
        it("Зменшує якість на -4 при нульовому терміні зберігання", function () {
            expectItemUpdate("Conjured Mana Cake", 0, 18, -1, 14);
        });
        it("Зменшує якість на -4 при негативному терміні зберігання", function () {
            expectItemUpdate("Conjured Mana Cake", -1, 14, -2, 10);
        });
    });
    describe("з негативним терміном придатності", function () {
        it("Зменшує якість на -4 при позитивній якості, яка більше 4", function () {
            expectItemUpdate("Conjured Mana Cake", -1, 20, -2, 16);
        });
        it("Зменшує якість на -3 при якості, яка дорівнює 3", function () {
            expectItemUpdate("Conjured Mana Cake", -1, 3, -2, 0);
        });
        it("Зменшує якість на -2 при якості, яка дорівнює 2", function () {
            expectItemUpdate("Conjured Mana Cake", -1, 2, -2, 0);
        });
        it("Зменшує якість на -1 при якості, яка дорівнює 1", function () {
            expectItemUpdate("Conjured Mana Cake", -1, 1, -2, 0);
        });
        it("Не змінює якість при нульовій якості", function () {
            expectItemUpdate("Conjured Mana Cake", -1, 0, -2, 0);
        });
    });
});
