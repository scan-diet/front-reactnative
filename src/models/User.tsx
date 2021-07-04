import UserProfile from "./UserProfile";

class User {
    private email: string;
    private password: string;
    private token: string;
    private profile: UserProfile;

    constructor(
        email:string,
        password:string,
        token:string,
        profile: UserProfile
    ) {
        this.email = email;
        this.password = password;
        this.token = token;
        this.profile = profile;
    }
}

export default User;
