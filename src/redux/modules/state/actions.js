import axios from "axios";
import { GET_CURRENCY_LIST_COMPLEATE, HIDE_LOADING, REQUEST_FAILURE, SHOW_LOADING } from "../exchange/types";
import { SERVER_URL } from "../../../constants/Constants";

export const SET_ACTIVE_PAGE = 'state/SET_ACTIVE_PAGE';
export const setActivePage = value => {
    return {
        type: SET_ACTIVE_PAGE,
        value
    };
};

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

export const getCurrencyListCompleate = data => ({
    type: GET_CURRENCY_LIST_COMPLEATE,
    data
})

export const getCurrencyList = () => {
    return async dispatch => {
        dispatch(setLoadingAnimation())
        axios.get(`${SERVER_URL}/currencyList`)
        .then(responseData => {
            dispatch(getCurrencyListCompleate(responseData.data));
            dispatch(hideLoadingAnimation())
        })
        .catch(responseData => {
            dispatch(requestFailure(responseData.message));
        })
    }
}