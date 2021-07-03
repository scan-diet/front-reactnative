const API_URL ="";

class AuthService {
    async login(email: string, password: string){
        let response = await fetch(
            API_URL+'/users/authenticate', {
                method: "post",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "email":email,
                        "password":password
                    }
                )});

        let json = await response.json();
        let status = response.status;
        if (status === 200){
            localStorage.setItem("user", json);
        }
    }
    logout(){
        localStorage.removeItem("user");
    }
    async register(email: string, password: string){
        let response = await fetch(
            API_URL+'/users/create', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "email":email,
                        "password":password
                    }
                )});

        let status = response.status;

        if (status === 201){
            console.log("registred")
            await this.login(email, password);
        } else {
            console.log("not registred")
        }
    }
}

export default new AuthService();