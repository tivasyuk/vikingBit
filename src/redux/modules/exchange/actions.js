import axios from "axios";
import {SERVER_URL} from "../../../constants/Constants";
import { GET_ORDER_DATA_COMPLEATE,  SET_EXCHANGE_RATE, SET_EXCHANGE_VALUE, SET_SCREEN_STATE } from "./types";
import {hideLoadingAnimation, requestFailure, setLoadingAnimation} from "../state/actions";

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

const getOrderDataCompleate = data => ({
    type: GET_ORDER_DATA_COMPLEATE,
    data
})

export const setScreenState = screenState => ({
    type: SET_SCREEN_STATE,
    screenState
})


export const putOrderExchangeData = (data) => {
    const formData = new FormData()
    const options = {
        header: {'content-type': 'multypart/form-data'}
    }
    for (let key in data) {
        formData.append(key, data[key]);
    }
    formData.append('orderData', JSON.stringify(data));
    return async dispatch => {
        dispatch(setLoadingAnimation())
        axios.put(`${SERVER_URL}/orders`, formData, options)
        .then(responseData => {
            dispatch(getOrderById(data.transactionID));
            dispatch(hideLoadingAnimation())
        })
        .catch(responseData => {
            dispatch(requestFailure(responseData.message));
        })
    }
}

export const getOrderById = (transactionID) => {
    return async dispatch => {
        dispatch(setLoadingAnimation())
        axios.get(`${SERVER_URL}/orders?id=${transactionID}`)
        .then(responseData => {
            dispatch(getOrderDataCompleate(responseData.data));
            dispatch(setScreenState({screenStep: 4}))
            dispatch(hideLoadingAnimation())
        })
        .catch(responseData => {
            dispatch(requestFailure(responseData.message));
        })
    }
}