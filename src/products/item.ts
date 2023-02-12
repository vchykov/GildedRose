export class Item {
    name: string;
    sellIn: number;
    #quality: number;
    public get quality(): number {
        return this.#quality;
    }
    public set quality(value: number) {
        this.#quality = value;
    }
    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.#quality = quality;
    }
    updateQuality() {
        //blank
    }
}
