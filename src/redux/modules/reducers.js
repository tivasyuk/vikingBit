import {combineReducers} from 'redux';

import StateReducer from "./state/StateReducer";
import LoginReducer from "./login/LoginReducer";
import ExchangeReducer from "./exchange/ExchangeReducer";

let createReducer = () => {
    return combineReducers({
        state: StateReducer,
        login: LoginReducer,
        exchange: ExchangeReducer,
    });
}

export default createReducer;