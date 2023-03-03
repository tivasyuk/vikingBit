import {combineReducers} from 'redux';

import LoginReducer from "./login/LoginReducer";
import ExchangeReducer from "./exchange/ExchangeReducer";

let createReducer = () => {
    return combineReducers({
        login: LoginReducer,
        exchange: ExchangeReducer,
    });
}

export default createReducer;
//
//
//
// import exchange from "./exchange/ExchangeReducer"
// import ExchangeReducer from "./exchange/ExchangeReducer";
//
// export default {
//     exchange
// };