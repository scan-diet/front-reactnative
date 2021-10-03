import * as ACTIONS from "./actionTypes";
import User from "../../models/User";
import {Product} from "../../models/Product";
import History from "../../models/History";
import HistoryShopping from "../../models/HistoryShopping";

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
    return ({
        history: userHistory,
        type: ACTIONS.SET_HISTORY
    })
}

export const  SetShopping = ( userShopping : Product[] = []) => {
    return ({
        shopping: userShopping,
        type: ACTIONS.SET_SHOPPING
    })
}

export const  SetHistoryShopping = ( userShopping : HistoryShopping[] = []) => {
    return ({
        historyShopping: userShopping,
        type: ACTIONS.SET_HISTORY_SHOPPING
    })
}

export const Logout = () => {
    return {
        type: ACTIONS.LOGOUT
    }
}
