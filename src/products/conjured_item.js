const CommonItem = require("./common_item");

class ConjuredItem extends CommonItem {
    updateQuality() {
        this.quality -= ((this.sellIn-- > 0) ? 2 : 4);
    }
}

module.exports = ConjuredItem;
