import * as ACTIONS from "./actionTypes";

export const SetToken = (token: string) => {
    return ({
        token,
        type: ACTIONS.SET_TOKEN
    });
};

/*
export async function SetToken(token:string) {
    return ({
        token,
        type: ACTIONS.SET_TOKEN
    });
}

 */

export const SetUserDetail = (userDetail: any) => {
    return ({
        email: userDetail.email,
        profil: userDetail.profil,
        type: ACTIONS.SET_PROFILE
    })
};

export const Logout = () => {
    return ({
        type: ACTIONS.LOGOUT
    })
}
