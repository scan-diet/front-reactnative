import * as ACTIONS from '../actions/actionTypes';
import User from "../../models/User";
import {Product} from "../../models/Product";
import {History} from "../../models/History";

const initialState = {
    user: new User("","", "",0,0,0, false,false,false,false),
    history: new History()
};

export default (state = initialState, action: {
    type: string,
    user: User,
    history: Product[],
    token: string;
}) => {
    switch (action.type) {
        case ACTIONS.SET_PROFILE:
            return {
                ...state,
                token: action.token,
                user: action.user
            };
        case ACTIONS.SET_HISTORY:
            return{
                ...state,
                history: action.history
            }
        case ACTIONS.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };

        default:
            return state;
    }
};
