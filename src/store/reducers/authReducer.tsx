import * as ACTIONS from '../actions/actionTypes';
import User from "../../models/User";
import {Product} from "../../models/Product";
import History from "../../models/History";
import {LOGOUT} from "../actions/actionTypes";
import HistoryShopping from "../../models/HistoryShopping";

const initialState = {
    user: new User("","", "",0,0,0, false,false,false,false),
    history: new History(),
    shopping: new History(),
    historyShopping: [new HistoryShopping()]
};

export default (state = initialState, action: {
    type: string,
    user: User,
    history: Product[],
    shopping: Product[],
    historyShopping: HistoryShopping[],
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
            };
        case ACTIONS.SET_SHOPPING:
            return{
                ...state,
                shopping: action.shopping
            };
        case ACTIONS.SET_HISTORY_SHOPPING:
            return{
                ...state,
                historyShopping: action.historyShopping
            };
        case ACTIONS.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case LOGOUT:
            return initialState;

        default:
            return state;
    }
};
