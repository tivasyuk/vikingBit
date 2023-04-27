import { SET_EXCHANGE_RATE, SET_EXCHANGE_VALUE, SET_SCREEN_STATE, SHOW_LOADING, HIDE_LOADING, GET_ORDER_DATA_COMPLEATE, REQUEST_FAILURE } from "./types";

const initialState = {
    exchangeRate: 0,
    exchangeValues: {
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
                exchangeRate: action.value
            };
        case SET_EXCHANGE_VALUE:
            return {
                ...state,
                exchangeValues: {
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
        case REQUEST_FAILURE:
            return { ...state, errorMessage: action.message, loading: false };
        case GET_ORDER_DATA_COMPLEATE:
            return {...state, orderData: action.data}
        default: {
            return state;
        }
    }
};

export default ExchangeReducer;