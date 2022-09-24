const expectItemUpdate = require("./utils/expect_item_update");

describe("Звичайний товар", function () {
    describe("з позитивним терміном придатності", function () {
        it("Зменшує якість на -1 при позитивній якості, яка більше 1", function () {
            expectItemUpdate("+5 Dexterity Vest", 10, 20, 9, 19);
        });
        it("Не змінює якість при нульовій якості", function () {
            expectItemUpdate("+5 Dexterity Vest", 10, 0, 9, 0);
        });
    });
    describe("при вичерпанні терміну придатності", function () {
        it("Зменшує якість на -1 при позитивному терміні зберігання", function () {
            expectItemUpdate("+5 Dexterity Vest", 1, 20, 0, 19);
        });
        it("Зменшує якість на -2 при нульовому терміні зберігання", function () {
            expectItemUpdate("+5 Dexterity Vest", 0, 19, -1, 17);
        });
        it("Зменшує якість на -2 при негативному терміні зберігання", function () {
            expectItemUpdate("+5 Dexterity Vest", -1, 20, -2, 18);
        });
    });
    describe("з негативним терміном придатності", function () {
        it("Зменшує якість на -2 при позитивній якості, яка більше 1", function () {
            expectItemUpdate("+5 Dexterity Vest", -1, 20, -2, 18);
        });
        it("Зменшує якість на -1 при якості, яка дорівнює 1", function () {
            expectItemUpdate("+5 Dexterity Vest", -1, 1, -2, 0);
        });
        it("Не змінює якість при нульовій якості", function () {
            expectItemUpdate("+5 Dexterity Vest", -1, 0, -2, 0);
        });
    });
});
