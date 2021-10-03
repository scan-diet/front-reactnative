import {Product} from "./Product";

class Shopping {
    products: Product[]= []

    constructor(products: Product[]= []) {
        this.products = products;
    }
}

export default Shopping;
