import { CommonItem } from "./common_item";

export class BrieItem extends CommonItem {
    updateQuality() {
        this.quality += this.sellIn-- > 0 ? 1 : 2;
    }
}
