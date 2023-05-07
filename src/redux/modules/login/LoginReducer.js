import {
    SET_FORGOT_PASSWORD_POPUP_STATE,
    SET_REGISTRATION_POPUP_STATE,
    SET_SIGN_IN_DATA,
    SET_SIGN_IN_POPUP_STATE
} from "./actions";
import {GET_USER_EXCHANGE_HISTORY_COMPLETE} from "../exchange/types";

const initialState = {
    isSignInPopupVisible: false,
    isRegistrationPopupVisible: false,
    isForgotPasswordPopupVisible: false,
    isLoggedIn: false,
    userData: {
        email: ''
    },
    userExchangeHistoryData: {}
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIGN_IN_POPUP_STATE:
            return {
                ...state,
                isSignInPopupVisible: action.value
            };
        case SET_REGISTRATION_POPUP_STATE:
            return {
                ...state,
                isRegistrationPopupVisible: action.value
            };
        case SET_FORGOT_PASSWORD_POPUP_STATE:
            return {
                ...state,
                isForgotPasswordPopupVisible: action.value
            };
        case SET_SIGN_IN_DATA:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                userData: {email: action.email}
            };
        case GET_USER_EXCHANGE_HISTORY_COMPLETE:
            return {
                ...state,
                userExchangeHistoryData: action.data
            };
        default: {
            return state;
        }
    }
};

export default LoginReducer;