import Diet from "./Diet";

class UserProfile {
    private name: string;
    private weight: number;
    private height: number;
    private weightGoal: number;
    private diet: Diet;
    constructor(
        name:string,
        weight:number,
        height:number,
        weightGoal:number,
        diet:Diet
    ) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.weightGoal = weightGoal;
        this.diet = diet;
    }
}

export default UserProfile;
