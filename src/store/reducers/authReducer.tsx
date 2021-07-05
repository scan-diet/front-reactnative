import * as ACTIONS from '../actions/actionTypes';
import User from "../../models/User";
import UserProfile from "../../models/UserProfile";
import Diet from "../../models/Diet";
import {LOGOUT} from "../actions/actionTypes";

const initialState = {
    user: new User("","","",
            new UserProfile("",0,0,0,
                new Diet(false,false,false,false)
            )
        )
};

/*const userReducer = (state = initialState,
                     action: { type: string,
                         email: number,
                         profile: {
                                    name: string,
                                    weight: number,
                                    height: number,
                                    weightGoal: number,
                                    diet:{
                                        withouLactose: boolean,
                                        withoutGluten:boolean,
                                        vegan:boolean,
                                        vegetarian:boolean}},
                         token:string
                    }) => {
    switch (action.type) {
        case ACTIONS.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };

        case ACTIONS.SET_PROFILE:
            return {
                ...state,
                user: {
                    email: action.email,
                    profil: action.profile
                },
                isAuth: true
            };

        case ACTIONS.LOGOUT:
            return {
                user:{
                },
                isAuth: false
            };

        default:
            return state;
    }
}*/

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

//export default userReducer;
