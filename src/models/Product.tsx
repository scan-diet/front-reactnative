import Nutriment from "./Nutriment";

export class Product {
    name: string;
    image: string;
    nutriments:Nutriment[]
    nutriscore: string
    kcal: number

    constructor(name:string, image:string, nutriments:Nutriment[], nutriscore:string,kcal:number) {
        this.name = name
        this.image = image
        this.nutriscore = nutriscore
        this.kcal = kcal
        this.nutriments = nutriments
    }
}

