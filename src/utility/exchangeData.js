import {setExchangeRate, setExchangeValue} from "../redux/modules/exchange/actions";
import { store } from "../index";

export const exchangeConverter = (to, from, amount = '', direction = '') => {
    let currentRate = (+from.sell) / (+to.buy);
    store.dispatch(setExchangeRate(+currentRate.toFixed(6)))

    let sendAmount = '';
    let getAmount = '';
    if (direction === "from") {
        getAmount = +(parseFloat(amount) * currentRate).toFixed(6);
        sendAmount = parseFloat(amount);
    }
    if (direction === "to") {
        sendAmount = +(parseFloat(amount) / currentRate).toFixed(6);
        getAmount = parseFloat(amount);
    }
    let change = {sendAmount: sendAmount >= 0 ? sendAmount : "", sendCurrency: from, getAmount: getAmount >= 0 ? getAmount : "", getCurrency: to};
    store.dispatch(setExchangeValue(change));
}