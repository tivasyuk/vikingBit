import {setExchangeRate, setExchangeValue} from "../redux/modules/exchange/actions";
import { store } from "../index";

export const exchangeConverter = (to, from, amount = '', direction = '') => {
    let currentRate =  from.buy / to.buy;
    store.dispatch(setExchangeRate(currentRate))

    let sendAmount = '';
    let getAmount = '';
    if (direction === "from") {
        getAmount = parseFloat(amount) * currentRate;
        sendAmount = parseFloat(amount);
    }
    if (direction === "to") {
        sendAmount = parseFloat(amount) / currentRate;
        getAmount = parseFloat(amount);
    }
    let change = {sendAmount: sendAmount || "", sendCurrency: from, getAmount: getAmount || "", getCurrency: to};
    store.dispatch(setExchangeValue(change));
}