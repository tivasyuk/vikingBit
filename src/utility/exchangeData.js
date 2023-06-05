import {setExchangeRate, setExchangeValue} from "../redux/modules/exchange/actions";
import { store } from "../index";

export const exchangeConverter = (to, from, config, amount = '', direction = '') => {
    console.log("exchangeConverter====",to, from, config, 'amount===' , amount, direction);
    let fromValue = null;
    let toValue = null;
    let currentRate = null;
    if (to.type === 'fiat' && from.type === 'fiat') {
        if (config[from.name] && config[from.name]?.[to.name]) {
            fromValue = config[from.name];
            toValue = fromValue[to.name];
            currentRate = +toValue.buy;
        } else if (config[to.name] && config[to.name]?.[from.name]) {
            fromValue = config[to.name];
            toValue = fromValue[from.name];
            currentRate = 1 / (+toValue.buy);
        }
    } else if ((to.type === 'fiat' && from.type === 'crypto') || (to.type === 'crypto' && from.type === 'fiat')) {
        if (to.type === 'fiat' && from.type === 'crypto') {
            let usdAmount = null;
            if (from.name !== 'USDT') {
                const usdtPairMult = config['USDT']?.[from.name];
                const usdtConvertatedCount = usdtPairMult.buy * amount;
                usdAmount = config['USD']?.['USDT'].buy * usdtConvertatedCount;
            } else {
                usdAmount = config['USD']?.['USDT'].buy * amount;
            }
            
            if (to.name === 'USD') {
                currentRate = usdAmount;
            } else {
                const toCurrency = config['USD']?.[to.name];
                currentRate = usdAmount * toCurrency.sell;
            }
        }
        else if (to.type === 'crypto' && from.type === 'fiat') {
            let usdtAmount = null;
            if (from.name !== 'USD') {
                const usdPairMult = config['USD']?.[from.name];
                const usdConvertatedCount = usdPairMult.buy * amount;
                usdtAmount = config['USD']?.['USDT'].buy * usdConvertatedCount;
            } else {
                usdtAmount = config['USD']?.['USDT'].buy * amount;
            }
            
            if (to.name === 'USDT') {
                currentRate = usdtAmount;
            } else {
                const toCurrency = config['USDT']?.[to.name];
                currentRate = usdtAmount * toCurrency.sell;
            }
        }
    } else {
        if (from.name === 'USDT') {
            currentRate = config['USDT']?.[to.name].buy;
        }
        else if (to.name === 'USDT') {
            currentRate = 1 / config['USDT']?.[from.name].buy;
        }
        else {
            currentRate = config['USDT']?.[from.name].buy;
        }
    }

    let sendAmount = '';
    let getAmount = '';
    
    store.dispatch(setExchangeRate(currentRate.toFixed(6)))
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