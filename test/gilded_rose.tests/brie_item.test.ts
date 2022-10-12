import { expectItemUpdate } from "./utils/expect_item_update";

describe("Aged Brie", function () {
    describe("з позитивним терміном придатності", function () {
        it("Збільшує якість на +1 при позитивній якості", function () {
            expectItemUpdate("Aged Brie", 2, 10, 1, 11);
        });
        it("Збільшує якість на +1  при нульовій якості", function () {
            expectItemUpdate("Aged Brie", 4, 0, 3, 1);
        });
        it("Не збільшує якість при якості 50", function () {
            expectItemUpdate("Aged Brie", 4, 50, 3, 50);
        });
    });
    describe("при вичерпанні терміну придатності", function () {
        it("Збільшує якість на +1 при позитивному терміні зберігання", function () {
            expectItemUpdate("Aged Brie", 1, 1, 0, 2);
        });
        it("Збільшує якість на +2 при нульовому терміні зберігання", function () {
            expectItemUpdate("Aged Brie", 0, 2, -1, 4);
        });
        it("Збільшує якість на +2 при негативному терміні зберігання", function () {
            expectItemUpdate("Aged Brie", -1, 4, -2, 6);
        });
    });
    describe("з негативним терміном придатності", function () {
        it("Збільшує якість на +2 при позитивній якості", function () {
            expectItemUpdate("Aged Brie", -2, 6, -3, 8);
        });
        it("Не збільшує якість при якості 50", function () {
            expectItemUpdate("Aged Brie", -3, 50, -4, 50);
        });
        it("Збільшує якість на +1 при якості 49", function () {
            expectItemUpdate("Aged Brie", -3, 49, -4, 50);
        });
    });
});
