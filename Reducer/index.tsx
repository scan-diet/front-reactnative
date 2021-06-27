// @flow
//
// Main Reducer
// -----------
// Combine all App reducers

import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import type {authReducerType} from "./authReducer";

export default combineReducers({
    auth: authReducer,
});

export type RootState = {
    auth: authReducerType,
};
