import axios from "axios";
import {
    GET_CURRENCY_LIST_COMPLEATE,
    GET_WALLETS_LIST_COMPLEATE,
    HIDE_LOADING,
    REQUEST_FAILURE,
    SHOW_LOADING
} from "../exchange/types";
import { SERVER_URL } from "../../../constants/Constants";

export const SET_ADD_REVIEW_POPUP_STATE = 'state/SET_ADD_REVIEW_POPUP_STATE';
export const setAddReviewPopupState = value => {
    return {
        type: SET_ADD_REVIEW_POPUP_STATE,
        value
    };
};

export const setLoadingAnimation = () => ({
    type: SHOW_LOADING
})

export const hideLoadingAnimation = () => ({
    type: HIDE_LOADING
})

export const requestFailure = data => ({
    type: REQUEST_FAILURE,
    data
})

export const getCurrencyListComplete = data => ({
    type: GET_CURRENCY_LIST_COMPLEATE,
    data
})

export const getWalletsListComplete = data => ({
    type: GET_WALLETS_LIST_COMPLEATE,
    data
})

export const getCurrencyList = () => {
    return async dispatch => {
        dispatch(setLoadingAnimation())
        axios.get(`${SERVER_URL}/currencyList`)
        .then(responseData => {
            dispatch(getCurrencyListComplete(responseData.data));
            dispatch(hideLoadingAnimation())
        })
        .catch(responseData => {
            dispatch(requestFailure(responseData.message));
        })
    }
}

export const getWalletsList = () => {
    return async dispatch => {
        axios.get(`${SERVER_URL}/wallets`)
            .then(responseData => {
                dispatch(getWalletsListComplete(responseData.data));
            })
            .catch(responseData => {
                dispatch(requestFailure(responseData.message));
            })
    }
}