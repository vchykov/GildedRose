import { CommonItem } from "./common_item";

export class ConjuredItem extends CommonItem {
    updateQuality() {
        this.quality -= this.sellIn-- > 0 ? 2 : 4;
    }
}
