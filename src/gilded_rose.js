const createItems = require("./create_items/create_items");

class Shop {
    constructor(items = []) {
        this.items = createItems(items);
    }
    updateQuality() {
        this.items.forEach(item => item.updateQuality());
        return this.items;
    }
}

module.exports = Shop;
