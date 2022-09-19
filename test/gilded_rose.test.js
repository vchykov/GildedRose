const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose:", function () {
    
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

    describe("Sulfuras", function() {
        describe("якість завжди дорівнює 80", function () {
            it("термін придатності не змінюється", function () {
                expectItemUpdate("Sulfuras, Hand of Ragnaros", 0, 80, 0, 80);
            });
            it("термін придатності не змінюється", function () {
                expectItemUpdate("Sulfuras, Hand of Ragnaros", -1, 80, -1, 80);
            });
        }); 
    });

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

    function expectItemUpdate(itemName, sellIn, quality, toBeSellIn, toBeQuality) {
        const gildedRose = new Shop([new Item(itemName, sellIn, quality)]);
        const item = gildedRose.updateQuality()[0];
        expect(item.name).toBe(itemName);
        expect(item.sellIn).toBe(toBeSellIn);
        expect(item.quality).toBe(toBeQuality);
    }
    
});
