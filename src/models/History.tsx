import {Product} from "./Product";

class History {
    products: Product[]= []

    constructor(
        products: Product[]= []
    ) {
        this.products = products;
    }
}

export default History;