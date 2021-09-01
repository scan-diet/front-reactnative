class User {
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    private _email: string;
    private _token: string;
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    get weightGoal(): number {
        return this._weightGoal;
    }

    set weightGoal(value: number) {
        this._weightGoal = value;
    }

    get withoutLactose(): boolean {
        return this._withoutLactose;
    }

    set withoutLactose(value: boolean) {
        this._withoutLactose = value;
    }

    get withoutGluten(): boolean {
        return this._withoutGluten;
    }

    set withoutGluten(value: boolean) {
        this._withoutGluten = value;
    }

    get vegan(): boolean {
        return this._vegan;
    }

    set vegan(value: boolean) {
        this._vegan = value;
    }

    get vege(): boolean {
        return this._vege;
    }

    set vege(value: boolean) {
        this._vege = value;
    }

    private _height: number;
    private _weight: number;
    private _weightGoal: number;
    private _withoutLactose: boolean;
    private _withoutGluten: boolean;
    private _vegan: boolean;
    private _vege: boolean;
    // private _profile: UserProfile;

    constructor(
        email:string,
        name:string,
        token:string,
        // profile: UserProfile
        height: number,
        weight:number,
        weightGoal:number,
        withoutLactose:boolean,
        withoutGluten:boolean,
        vegan:boolean,
        vege:boolean
    ) {
        this._email = email;
        this._name = name;
        this._token = token;
        this._height = height;
        this._weight = weight;
        this._weightGoal = weightGoal;
        this._vegan = vegan;
        this._vege = vege;
        this._withoutLactose = withoutLactose;
        this._withoutGluten = withoutGluten;
    }
}

export default User;
