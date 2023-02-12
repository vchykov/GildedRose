import { Item } from "./item";

export class CommonItem extends Item {
    #quality: number;
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
        this.#quality = quality;
    }
    updateQuality() {
        this.quality -= this.sellIn-- > 0 ? 1 : 2;
    }
    set quality(value) {
        if (value > 50) {
            this.#quality = 50;
        } else if (value < 0) {
            this.#quality = 0;
        } else {
            this.#quality = value;
        }
    }
    get quality() {
        return this.#quality;
    }
}
