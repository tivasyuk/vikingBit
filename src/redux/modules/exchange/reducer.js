import { SET_EXCHANGE_RATE, SET_EXCHANGE_VALUE, PUT_NEW_ORDER_FAILURE, SET_SCREEN_STATE, SHOW_LOADING, HIDE_LOADING, GET_ORDER_DATA_COMPLEATE } from "./types";

const initialState = {
    exchangeRate: {
        minSum: 0,
        reverse: 0,
        rate: 0
    },
    exchangeValue: {
        sendAmount: '',
        sendCurrency: '',
        getAmount: '',
        getCurrency: ''
    },
    loading: false,
    exchangeScreenState: {
        screenStep: 1,
        exchangeType: ''
    },
    orderData: {}
}

const ExchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EXCHANGE_RATE:
            return {
                ...state,
                exchangeRate: {
                    minSum: action.value.minSum,
                    reverse: action.value.reverse,
                    rate: action.value.rate
                }
            };
        case SET_EXCHANGE_VALUE:
            return {
                ...state,
                exchangeValue: {
                    sendAmount: action.value.sendAmount,
                    sendCurrency: action.value.sendCurrency,
                    getAmount: action.value.getAmount,
                    getCurrency: action.value.getCurrency,
                }
            };
        case SET_SCREEN_STATE:
            return {
                ...state,
                exchangeScreenState: {
                    screenStep: action.screenState?.screenStep,
                    exchangeType: action.screenState?.exchangeType || state.exchangeScreenState.exchangeType
                }
            };
        case SHOW_LOADING: 
            return { ...state, loading: true };
        case HIDE_LOADING:
            return { ...state, loading: false };
        case PUT_NEW_ORDER_FAILURE:
            return { ...state, errorMessage: action.message, loading: false };
        case GET_ORDER_DATA_COMPLEATE:
            return {...state, orderData: action.data}
        default: {
            return state;
        }
    }
};

export default ExchangeReducer;