export const SET_EXCHANGE_RATE = 'state/SET_EXCHANGE_RATE';
export const setExchangeRate = value => {
    return {
        type: SET_EXCHANGE_RATE,
        value
    };
};

export const SET_EXCHANGE_VALUE = 'state/SET_EXCHANGE_VALUE';
export const setExchangeValue = value => {
    return {
        type: SET_EXCHANGE_VALUE,
        value
    };
};