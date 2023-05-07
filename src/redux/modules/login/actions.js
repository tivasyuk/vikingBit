import {GET_USER_EXCHANGE_HISTORY_COMPLETE} from "../exchange/types";
import axios from "axios";
import {SERVER_URL} from "../../../constants/Constants";
import {hideLoadingAnimation, requestFailure, setLoadingAnimation} from "../state/actions";

export const SET_SIGN_IN_POPUP_STATE = 'state/SET_SIGN_IN_POPUP_STATE';
export const setSignInPopupState = value => {
    return {
        type: SET_SIGN_IN_POPUP_STATE,
        value
    };
};

export const SET_REGISTRATION_POPUP_STATE = 'state/SET_REGISTRATION_POPUP_STATE';
export const setRegistrationPopupState = value => {
    return {
        type: SET_REGISTRATION_POPUP_STATE,
        value
    };
};

export const SET_FORGOT_PASSWORD_POPUP_STATE = 'state/SET_FORGOT_PASSWORD_POPUP_STATE';
export const setForgotPasswordPopupState = value => {
    return {
        type: SET_FORGOT_PASSWORD_POPUP_STATE,
        value
    };
};

export const SET_SIGN_IN_DATA = 'state/SET_SIGN_IN_DATA';
export const setSignInData = (isLoggedIn, email, password) => {
    return {
        type: SET_SIGN_IN_DATA,
        isLoggedIn,
        email,
        password
    };
};

export const getUserExchangeHistoryComplete = data => ({
    type: GET_USER_EXCHANGE_HISTORY_COMPLETE,
    data
})

export const getUserExchangeHistory = () => {
    return async dispatch => {
        dispatch(setLoadingAnimation())
        axios.get(`${SERVER_URL}/orders`)
            .then(responseData => {
                dispatch(getUserExchangeHistoryComplete(responseData.data));
                dispatch(hideLoadingAnimation())
            })
            .catch(responseData => {
                dispatch(requestFailure(responseData.message));
            })
    }
}