import {setExchangeRate, setExchangeValue} from "../redux/modules/exchange/actions";
import { store } from "../index";

export const exchangeConverter = (to, from, amount = '', direction = '') => {
    let fluctuation = [
        {
            base: "BTC",
            rates: {
                "USDT": {
                    minSum: 0.0101122,
                    reverse: 72176787.11,
                    rate: 24656.90597113
                },
                "EUR": {
                    minSum: 0.00455049,
                    reverse: 15477940.26,
                    rate: 21953.3458
                },
                "USD": {
                    minSum: 0.00455049,
                    reverse: 10062074.91,
                    rate: 23283.9009
                },
            }
        },
        {
            base: "ETH",
            rates: {
                "USDT": {
                    minSum: 0.15051706,
                    reverse: 72176787.11,
                    rate: 1649.93160425
                },
                "EUR": {
                    minSum: 0.06773268,
                    reverse: 15477940.26,
                    rate: 1464.4194
                },
                "USD": {
                    minSum: 0.06773268,
                    reverse: 10062074.91,
                    rate: 1572.1187
                },
            }
        },
        {
            base: "UAH",
            rates: {
                "USDT": {
                    minSum: 10055,
                    reverse: 72176787.11,
                    rate: 0.025315667449
                },
                "EUR": {
                    minSum: 5000,
                    reverse: 15477940.26,
                    rate: 0.0223822308858486
                },
                "USD": {
                    minSum: 5000,
                    reverse: 10062074.91,
                    rate: 0.023784
                },
            }
        },
        {
            base: "EUR",
            rates: {
                "USDT": {
                    minSum: 150,
                    reverse: 72176787.11,
                    rate: 0.96112619
                },
                "EUR": {
                    minSum: 50,
                    reverse: 20199365.90,
                    rate: 0.9801
                },
                "USD": {
                    minSum: 50,
                    reverse: 20042859.29,
                    rate: 0.9609
                },
            }
        },
    ]

    let objFrom = fluctuation.find((el) => el.base === from);
    let currentRate = objFrom.rates[to];
    store.dispatch(setExchangeRate(currentRate))

    let sendAmount = '';
    let getAmount = '';
    if (direction === "from") {
        getAmount = parseFloat(amount) * currentRate.rate;
        sendAmount = parseFloat(amount);
    }
    if (direction === "to") {
        sendAmount = parseFloat(amount) / currentRate.rate;
        getAmount = parseFloat(amount);
    }
    let change = {sendAmount: sendAmount, sendCurrency: from, getAmount: getAmount, getCurrency: to};
    store.dispatch(setExchangeValue(change));
}