import StateReducer from "./state/StateReducer";
import LoginReducer from "./login/LoginReducer";
import ExchangeReducer from "./exchange/reducer";

let createRootReducer  =  {
    state: StateReducer,
    login: LoginReducer,
    exchange: ExchangeReducer,
}

export default createRootReducer;