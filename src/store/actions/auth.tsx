import  {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import  AuthService from "../services/auth";

export const login = (email: string, password: string) => (dispatch: any) => {
    return AuthService.login(email,password).then(
        (data: any)=>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: data},
            });

            return Promise.resolve();
        },
        (error: any) => {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            dispatch({
                type:LOGIN_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};