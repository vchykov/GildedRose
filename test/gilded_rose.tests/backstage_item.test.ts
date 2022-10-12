import { expectItemUpdate } from "./utils/expect_item_update";

describe("Backstage passes", function () {
    describe("з негативним терміном придатності", function () {
        it("Якість завжди дорівнює 0", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", -1, 0, -2, 0);
        });
    });
    describe("з позитивним терміном придатності", function () {
        it("Збільшує якість на +1 з терміном придатності більше 10", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 15, 10, 14, 11);
        });
        it("Збільшує якість на +2 з терміном придатності менше 10 та більше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 7, 10, 6, 12);
        });
        it("Збільшує якість на +3 з терміном придатності менше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 4, 11, 3, 14);
        });
    });
    describe("при досягненні максимальної якості 50", function () {
        it("Збільшує якість до 50 з терміном придатності більше 10", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 15, 49, 14, 50);
        });
        it("Збільшує якість до 50 з терміном придатності менше 10 та більше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 7, 48, 6, 50);
        });
        it("Збільшує якість до 50 з терміном придатності менше 10 та більше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 7, 49, 6, 50);
        });
        it("Збільшує якість до 50 з терміном придатності менше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 4, 47, 3, 50);
        });
        it("Збільшує якість до 50 з терміном придатності менше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 4, 48, 3, 50);
        });
        it("Збільшує якість до 50 з терміном придатності менше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 4, 49, 3, 50);
        });
        it("Не збільшує якість вище 50 з терміном придатності більше 10", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 15, 50, 14, 50);
        });
        it("Не збільшує якість вище 50 з терміном придатності менше 10 та більше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 8, 50, 7, 50);
        });
        it("Не збільшує якість вище 50 з терміном придатності менше 5", function () {
            expectItemUpdate("Backstage passes to a TAFKAL80ETC concert", 5, 50, 4, 50);
        });
    });
});
