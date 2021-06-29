// @flow
//
// Profile reducers
// ---------------
// In charge the profile management

import * as ACTIONS from '../actions/actionTypes';

//TYPE
export type authReducerType = {
    email: string,
    profile: {
        name:string,
        weight: number,
        height: number,
        weightGoal: number,
        diet: {
            withoutLactose: boolean,
            withoutGluten: boolean,
            vegan: boolean,
            vegetarien: boolean
        }
    },
    token: string
}

//INITIAL VALUE
const initialState = {
    email: '',
    profile: {
        name:'',
        weight: 0,
        height: 0,
        weightGoal: 0,
        diet: {
            withoutLactose: false,
            withoutGluten: false,
            vegan: false,
            vegetarien: false
        }
    },
    token: 'string',
    isAuth: false
};

//reducers function
export default (
    state: authReducerType = initialState,
    action: {type: string, email: number,
            profile: {name: string, weight: number, height: number, weightGoal: number,
                diet:{withouLactose: boolean,withoutGluten:boolean,vegan:boolean,vegetarien:boolean}},
            token:string,
            exp: string
    }
) => {
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
                expired: action.exp,
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
};
