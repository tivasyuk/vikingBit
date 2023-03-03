import {SET_FORGOT_PASSWORD_POPUP_STATE, SET_REGISTRATION_POPUP_STATE, SET_SIGN_IN_POPUP_STATE} from "./actions";

const initialState = {
    isSignInPopupVisible: false,
    isRegistrationPopupVisible: false,
    isForgotPasswordPopupVisible: false,
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
        default: {
            return state;
        }
    }
};

export default LoginReducer;