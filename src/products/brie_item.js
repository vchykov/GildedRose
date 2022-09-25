const CommonItem = require("./common_item");

class BrieItem extends CommonItem {
    updateQuality() {
        this.quality += this.sellIn-- > 0 ? 1 : 2;
    }
}

module.exports = BrieItem;
