import axios from "axios";

const API_URL ="";

class AuthService {
    login(email: string, password: string){
        return axios
            .post(API_URL + "/user/login", {email, password})
            .then((response)=>{
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout(){
        localStorage.removeItem("user");
    }
    register(email: string, password: string){
        return axios.post(API_URL + "/user", {email,password});
    }
}

export default new AuthService();