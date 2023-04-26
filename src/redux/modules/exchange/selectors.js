import { createSelector } from 'reselect';

const selectExchangeDomain = (state) => state.exchange;

export const selectExchangeRate = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.exchangeRate
);
export const selectExchangeValue = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.exchangeValue
);

export const selectExchangeScreenState = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.exchangeScreenState
);

export const selectOrderData = createSelector(
    selectExchangeDomain,
    (exchangeDomain) => exchangeDomain.orderData
);
