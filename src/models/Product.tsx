import Nutriment from "./Nutriment";
import Diet from "./Diet";

export class Product {
    name: string;
    image: string;
    nutriments:Nutriment[]
    nutriscore: string
    kcal: number
    barcode: string
    recommandations: any[]
    respectsDiet: Diet
    isItemInfoComplete: boolean

    constructor(name:string, image:string, nutriments:Nutriment[], nutriscore:string,kcal:number, barcode:string, recommandations:any, respectsDiet: Diet, isItemInfoComplete: boolean) {
        this.name = name
        this.image = image
        this.nutriscore = nutriscore
        this.kcal = kcal
        this.nutriments = nutriments
        this.barcode = barcode
        this.recommandations = recommandations
        this.respectsDiet = respectsDiet
        this.isItemInfoComplete = isItemInfoComplete
    }
}
