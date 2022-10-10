import { createItems } from "./create_items/create_items";
import { Item } from "./products/item";

export class Shop {
    items: Array<Item>;
    constructor(items: Array<Item>) {
        this.items = createItems(items);
    }
    updateQuality() {
        this.items.forEach((item) => item.updateQuality());
        return this.items;
    }
}
