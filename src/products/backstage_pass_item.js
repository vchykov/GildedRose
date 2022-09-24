const CommonItem = require("./common_item");

class BackstagePassItem extends CommonItem {
    updateQuality() {
        if (this.sellIn-- <= 0) {
            this.quality = 0;
        } else if (this.sellIn > 10) {
            this.quality += 1;
        } else if (this.sellIn > 5) {
            this.quality += 2;
        } else if (this.sellIn > 0) {
            this.quality += 3;
        }
    }
}

module.exports = BackstagePassItem;
