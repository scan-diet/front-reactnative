import * as ACTIONS from '../actions/actionTypes';
import User from "../../models/User";
import UserProfile from "../../models/UserProfile";
import Diet from "../../models/Diet";
import {LOGOUT} from "../actions/actionTypes";

const initialState = {
    user: new User("","", "",0,0,0, false,false,false,false)
};

export default (state = initialState, action: {
    type: string,
    user: User,
    token: string;
}) => {
    switch (action.type) {
        case ACTIONS.SET_PROFILE:
            console.log(action)
            return {
                ...state,
                token: action.token,
                user: action.user
            };

        case ACTIONS.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };

        default:
            return state;
    }
};

//export default userReducer;
