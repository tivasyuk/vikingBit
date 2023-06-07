import {setExchangeRate, setExchangeValue} from "../redux/modules/exchange/actions";
import { store } from "../index";

export const exchangeConverter = (to, from, config, amount = '', direction = '') => {
    let fromValue = null;
    let toValue = null;
    let currentRate = null;
    if (to.type === 'fiat' && from.type === 'fiat') {
        if (config[from.name] && config[from.name]?.[to.name]) {
            fromValue = config[from.name];
            toValue = fromValue[to.name];
            currentRate = +toValue.buy + toValue.buyMultiplier;
        } else if (config[to.name] && config[to.name]?.[from.name]) {
            fromValue = config[to.name];
            toValue = fromValue[from.name];
            currentRate = (1 / (+toValue.buy)) + config[to.name].buyMultiplier;
        }
    } else if ((to.type === 'fiat' && from.type === 'crypto') || (to.type === 'crypto' && from.type === 'fiat')) {
        if (to.type === 'fiat' && from.type === 'crypto') {
            let usdAmount = null;
            if (from.name !== 'USDT') {
                const usdtPairMult = config['USDT']?.[from.name];
                usdAmount = (config['USD']?.['USDT'].buy * usdtPairMult.buy) + usdtPairMult.buyMultiplier;
            } else {
                usdAmount = config['USD']?.['USDT'].buy + config['USD']?.['USDT'].buyMultiplier;
            }
            usdAmount = 1 / usdAmount;
            if (to.name === 'USD') {
                currentRate = usdAmount;
            } else {
                toValue = config['USD']?.[to.name];
                currentRate = usdAmount * toValue.sell;
            }
        }
        else if (to.type === 'crypto' && from.type === 'fiat') {
            let usdtAmount = null;
            if (from.name !== 'USD') {
                const usdPairMult = config['USD']?.[from.name];
                usdtAmount = (config['USD']?.['USDT'].buy * usdPairMult.buy) + usdPairMult.buyMultiplier;
            } else {
                usdtAmount = config['USD']?.['USDT'].buy + config['USD']?.['USDT'].buyMultiplier;
            }
            
            if (to.name === 'USDT') {
                currentRate = usdtAmount;
            } else {
                toValue = config['USDT']?.[to.name];
                currentRate = usdtAmount * toValue.sell;
            }
        }
    } else {
        if (from.name === 'USDT') {
            currentRate = config['USDT']?.[to.name].buy + config['USDT']?.[to.name].buyMultiplier;
        }
        else if (to.name === 'USDT') {
            currentRate = (1 / config['USDT']?.[from.name].buy) + config['USDT']?.[from.name].buyMultiplier;
        }
        else {
            currentRate = (config['USDT']?.[to.name].sell / config['USDT']?.[from.name].buy) + config['USDT']?.[to.name].buyMultiplier;
        }
    }

    let sendAmount = '';
    let getAmount = '';
    
    store.dispatch(setExchangeRate(currentRate))
    if (direction === "from") {
        getAmount = +(parseFloat(amount) * currentRate);
        sendAmount = parseFloat(amount);
    }
    if (direction === "to") {
        sendAmount = +(parseFloat(amount) / currentRate);
        getAmount = parseFloat(amount);
    }
    let change = {sendAmount: sendAmount >= 0 ? sendAmount : "", sendCurrency: from, getAmount: getAmount >= 0 ? getAmount : "", getCurrency: to};
    store.dispatch(setExchangeValue(change));
}