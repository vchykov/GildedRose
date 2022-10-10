const { Shop } = require("../../../src/gilded_rose");
const { Item } = require("../../../src/products/item");

function expectItemUpdate(itemName, sellIn, quality, toBeSellIn, toBeQuality) {
    const gildedRose = new Shop([new Item(itemName, sellIn, quality)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.name).toBe(itemName);
    expect(item.sellIn).toBe(toBeSellIn);
    expect(item.quality).toBe(toBeQuality);
}

module.exports = expectItemUpdate;
