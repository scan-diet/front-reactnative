import UserProfile from "./UserProfile";

class User {
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get profile(): UserProfile {
        return this._profile;
    }

    set profile(value: UserProfile) {
        this._profile = value;
    }
    private _email: string;
    private _password: string;
    private _token: string;
    private _profile: UserProfile;

    constructor(
        email:string,
        password:string,
        token:string,
        profile: UserProfile
    ) {
        this._email = email;
        this._password = password;
        this._token = token;
        this._profile = profile;
    }
}

export default User;
