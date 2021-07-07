class Diet {
    lactoseFree: boolean;
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;

    constructor(
        lactoseFree: boolean,
        glutenFree: boolean,
        vegan: boolean,
        vegetarian: boolean,
    ) {
        this.lactoseFree = lactoseFree;
        this.glutenFree = glutenFree;
        this.vegan = vegan;
        this.vegetarian = vegetarian;
    }
}

export default Diet;
