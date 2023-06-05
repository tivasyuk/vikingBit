import { createSelector } from 'reselect';

const selectExchangeDomain = (state) => state.exchange;

export const selectExchangeRate = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.exchangeRate
);
export const selectExchangeValues = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.exchangeValues
);

export const selectExchangeScreenState = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.exchangeScreenState
);

export const selectExchangeConfig = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.exchangeConfig
);

export const selectOrderData = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.orderData
);
