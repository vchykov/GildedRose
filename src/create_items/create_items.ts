import { BrieItem } from "../products/brie_item";
import { CommonItem } from "../products/common_item";
import { ConjuredItem } from "../products/conjured_item";
import { SulfurasItem } from "../products/sulfuras_item";
import { BackstagePassItem } from "../products/backstage_pass_item";
import { Item } from "../products/item";

export function createItems(items: Array<Item>): Array<Item> {
    const resultItems: Array<Item> = [];
    for (let i = 0; i < items.length; i++) {
        switch (items[i].name) {
            case "Aged Brie":
                resultItems.push(new BrieItem(items[i].name, items[i].sellIn, items[i].quality));
                break;
            case "Backstage passes to a TAFKAL80ETC concert":
                resultItems.push(new BackstagePassItem(items[i].name, items[i].sellIn, items[i].quality));
                break;
            case "Sulfuras, Hand of Ragnaros":
                resultItems.push(new SulfurasItem(items[i].name, items[i].sellIn, items[i].quality));
                break;
            case "Conjured Mana Cake":
                resultItems.push(new ConjuredItem(items[i].name, items[i].sellIn, items[i].quality));
                break;
            default:
                resultItems.push(new CommonItem(items[i].name, items[i].sellIn, items[i].quality));
                break;
        }
    }
    return resultItems;
}
