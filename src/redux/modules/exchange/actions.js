import axios from "axios";
import {SERVER_URL} from "../../../constants/Constants";
import { GET_ORDER_DATA_COMPLEATE, GET_ORDER_DATA_FAILURE, HIDE_LOADING, PUT_NEW_ORDER_FAILURE, SET_EXCHANGE_RATE, SET_EXCHANGE_VALUE, SET_SCREEN_STATE, SHOW_LOADING } from "./types";

export const setExchangeRate = value => {
    return {
        type: SET_EXCHANGE_RATE,
        value
    };
};

export const setExchangeValue = value => {
    return {
        type: SET_EXCHANGE_VALUE,
        value
    };
};

const setLoadingAnimation = () => ({
    type: SHOW_LOADING
})

const hideLoadingAnimation = () => ({
    type: HIDE_LOADING
})

const putNewOrderFailure = message => ({
    type: PUT_NEW_ORDER_FAILURE,
    message
})

const getOrderDataCompleate = data => ({
    type: GET_ORDER_DATA_COMPLEATE,
    data
})

const getOrderDataFailure = data => ({
    type: GET_ORDER_DATA_FAILURE,
    data
})

export const setScreenState = screenState => ({
    type: SET_SCREEN_STATE,
    screenState
})


export const putOrderExchangeData = (data) => {
    return async dispatch => {
        dispatch(setLoadingAnimation())
        axios.put(`${SERVER_URL}/orders`, data)
        .then(responseData => {
            dispatch(getOrderById(data.transactionID));
        })
        .catch(responseData => {
            dispatch(putNewOrderFailure(responseData.message));
        })
    }
}

export const getOrderById = (transactionID) => {
    return async dispatch => {
        dispatch(setLoadingAnimation())
        axios.get(`${SERVER_URL}/orders?id=${transactionID}`)
        .then(responseData => {
            dispatch(getOrderDataCompleate(responseData.data));
        })
        .catch(responseData => {
            dispatch(getOrderDataFailure(responseData.message));
        })
    }
}