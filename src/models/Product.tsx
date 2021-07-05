/*export interface ImageUrl {
    path:string
}

export interface ProductDTO {
    name:string,
    image: ImageUrl
}*/

export class Product {
    name: string;
    image: string;
    protein:number
    fibre: number
    glucide: number
    lipide: number
    nutriscore: string
    kcal: number

    /*constructor(product: ProductDTO) {
        Object.assign(this,product)
    }*/

    constructor(name:string, image:string, protein:number, fibre:number, glucide:number, lipide:number,nutriscore:string,kcal:number) {
        this.name = name
        this.image = image
        this.protein = protein
        this.fibre = fibre
        this.glucide = glucide
        this.lipide = lipide
        this.nutriscore = nutriscore
        this.kcal = kcal
    }
}

