import * as ACTIONS from "./actionTypes";
import User from "../../models/User";

export const SetToken = (token: string) => {
    return ({
        token,
        type: ACTIONS.SET_TOKEN
    });
};

export const SetUserDetail = (userDetail: User) => {
    return ({
        email: userDetail.email,
        profile: userDetail.profile,
        type: ACTIONS.SET_PROFILE
    })
};

export const Logout = () => {
    return ({
        type: ACTIONS.LOGOUT
    })
}
