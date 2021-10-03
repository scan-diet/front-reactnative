import History from "./History";
import {Product} from "./Product";

class HistoryShopping {
    get startDate(): string {
        return this._startDate;
    }

    set startDate(value: string) {
        this._startDate = value;
    }
    get endDate(): string {
        return this._endDate;
    }

    set endDate(value: string) {
        this._endDate = value;
    }
    private _endDate: string = "";
    private _startDate: string = "";
    private _products: Product[]= []

    constructor(products: Product[]= [],endDate: string = "",startDate: string = "") {
        this._products = products;
        this._endDate = endDate;
        this._endDate = endDate;

    }


    get products(): Product[] {
        return this._products;
    }

    set products(value: Product[]) {
        this._products = value;
    }
    add(value: Product){
        this._products.push(value);
    }
}

export default HistoryShopping;