import Nutriment from "./Nutriment";

export class Product {
    name: string;
    image: string;
    nutriments:Nutriment[]
    nutriscore: string
    kcal: number
    barcode: any
    recommandations: any[]

    constructor(name:string, image:string, nutriments:Nutriment[], nutriscore:string,kcal:number, barcode:any, recommandations:any) {
        this.name = name
        this.image = image
        this.nutriscore = nutriscore
        this.kcal = kcal
        this.nutriments = nutriments
        this.barcode = barcode
        this.recommandations = recommandations
    }
}

