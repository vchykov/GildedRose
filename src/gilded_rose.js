class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case "Aged Brie":
                    tickBrie(this.items[i]);
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    tickBackstagePass(this.items[i]);
                    break;
                case "Sulfuras, Hand of Ragnaros":
                    tickSulfurus(this.items[i]);
                    break;
                case "Conjured Mana Cake":
                    tickConjured(this.items[i]);
                    break;
                default:
                    tickCommon(this.items[i]);
                    break;
            }
        }
        return this.items;
    }
}

function incrementQuality(item, value) {
    item.quality += value;
    if (item.quality > 50) {
        item.quality = 50;
    }
}

function decrementQuality(item, value) {
    item.quality -= value;
    if (item.quality < 0) {
        item.quality = 0;
    }
}

function tickCommon(item) {
    decrementQuality(item, (item.sellIn-- > 0) ? 1 : 2)
}

function tickConjured(item) {
    decrementQuality(item, (item.sellIn-- > 0) ? 2 : 4)
}

function tickBrie(item) {
    incrementQuality(item, (item.sellIn-- > 0) ? 1 : 2)
}

function tickBackstagePass(item) {
    if (item.sellIn-- <= 0) {
        item.quality = 0;
    } else if (item.sellIn > 10) {
        incrementQuality(item, 1);
    } else if (item.sellIn > 5) {
        incrementQuality(item, 2);
    } else if (item.sellIn > 0) {
        incrementQuality(item, 3);
    }
}

function tickSulfurus(item) {
    //do nothing
}

module.exports = {
    Item,
    Shop,
};