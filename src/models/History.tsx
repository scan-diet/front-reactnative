import {Product} from "./Product";

export class History {
    products: Product[]= []

    constructor(
        products: Product[]= []
    ) {
        this.products = products;
    }
}

