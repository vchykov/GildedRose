const BrieItem = require("../products/brie_item");
const CommonItem = require("../products/common_item");
const ConjuredItem = require("../products/conjured_item");
const SulfurasItem = require("../products/sulfuras_item");
const BackstagePassItem = require("../products/backstage_pass_item");

function createItems(items) {
    resultItems = [];
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

module.exports = createItems;
