import * as ACTIONS from "./actionTypes";
import User from "../../models/User";
import {Product} from "../../models/Product";

export const SetToken = (token: string) => {
    return ({
        token,
        type: ACTIONS.SET_TOKEN
    });
};

export const SetUserDetail = (userDetail: User) => {
    return ({
        user: userDetail,
        type: ACTIONS.SET_PROFILE
    })
};

export const  SetHistory = ( userHistory : Product[] = []) => {
    console.log('ok1')
    return ({
        history: userHistory,
        type: ACTIONS.SET_HISTORY
    })
}

export const Logout = () => {
    return ({
        type: ACTIONS.LOGOUT
    })
}
