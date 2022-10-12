import { Shop } from "../../../src/gilded_rose";
import { Item } from "../../../src/products/item";

export function expectItemUpdate(
    itemName: string,
    sellIn: number,
    quality: number,
    toBeSellIn: number,
    toBeQuality: number
) {
    const gildedRose = new Shop([new Item(itemName, sellIn, quality)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.name).toBe(itemName);
    expect(item.sellIn).toBe(toBeSellIn);
    expect(item.quality).toBe(toBeQuality);
}
