import { Item } from "./item";

export class CommonItem extends Item {
    updateQuality() {
        this.quality -= this.sellIn-- > 0 ? 1 : 2;
    }
    set quality(value) {
        if (value > 50) {
            this._quality = 50;
        } else if (value < 0) {
            this._quality = 0;
        } else {
            this._quality = value;
        }
    }
    get quality() {
        return this._quality;
    }
}
