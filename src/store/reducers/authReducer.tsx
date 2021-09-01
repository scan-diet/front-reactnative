import * as ACTIONS from '../actions/actionTypes';
import User from "../../models/User";

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
