class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
class CommonItem extends Item {
    updateQuality() {
        decrementQuality(this, (this.sellIn-- > 0) ? 1 : 2)
    }
}
class BrieItem extends Item {
    updateQuality() {
        incrementQuality(this, (this.sellIn-- > 0) ? 1 : 2)
    }
}
class ConjuredItem extends Item {
    updateQuality() {
        decrementQuality(this, (this.sellIn-- > 0) ? 2 : 4)
    }
}
class BackstagePassItem extends Item {
    updateQuality() {
        if (this.sellIn-- <= 0) {
            this.quality = 0;
        } else if (this.sellIn > 10) {
            incrementQuality(this, 1);
        } else if (this.sellIn > 5) {
            incrementQuality(this, 2);
        } else if (this.sellIn > 0) {
            incrementQuality(this, 3);
        }
    }
}

class Shop {
    constructor(items = []) {
        this.items = [];
        for (let i = 0; i < items.length; i++) {
            switch (items[i].name) {
                case "Aged Brie":
                    this.items[i] = new BrieItem(items[i].name, items[i].sellIn, items[i].quality);
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    this.items[i] = new BackstagePassItem(items[i].name, items[i].sellIn, items[i].quality);
                    break;
                case "Sulfuras, Hand of Ragnaros":
                    this.items[i] = new SulfurusItem(items[i].name, items[i].sellIn, items[i].quality);
                    break;
                case "Conjured Mana Cake":
                    this.items[i] = new ConjuredItem(items[i].name, items[i].sellIn, items[i].quality);
                    break;
                default:
                    this.items[i] = new CommonItem(items[i].name, items[i].sellIn, items[i].quality);
                    break;
            }
        }
    }
    updateQuality() {
        this.items.forEach(item => item.updateQuality());
        return this.items;
    }
}

class SulfurusItem extends Item {
    updateQuality() {
        //do nothing
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

module.exports = {
    Item,
    Shop,
};