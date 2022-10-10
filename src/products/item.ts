export class Item {
    name: string;
    sellIn: number;
    _quality: number;
    public get quality(): number {
        return this._quality;
    }
    public set quality(value: number) {
        this._quality = value;
    }
    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this._quality = quality;
    }
    updateQuality() {
        //blank
    }
}
