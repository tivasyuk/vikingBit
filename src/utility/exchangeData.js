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
            currentRate = parseFloat(toValue.buy) + toValue.buyMultiplier;
        } else if (config[to.name] && config[to.name]?.[from.name]) {
            fromValue = config[to.name];
            toValue = fromValue[from.name];
            currentRate = (1 / parseFloat(toValue.sell)) + config[to.name]?.[from.name].buyMultiplier;
        }
    } else if ((to.type === 'fiat' && from.type === 'crypto') || (to.type === 'crypto' && from.type === 'fiat')) {
        const usdtPairBuy = parseFloat(config['USD']?.['USDT'].buy);
        const usdtPairSell = parseFloat(config['USD']?.['USDT'].sell);
        const usdtBuyMultiplier = Number(config['USD']?.['USDT'].buyMultiplier);
        if (from.type === 'crypto' && to.type === 'fiat') {
            let usdAmount = null;
            if (from.name !== 'USDT') {
                const usdtPairMult = config['USDT']?.[from.name];
                usdAmount = parseFloat(usdtPairBuy * usdtPairMult.buy) + usdtPairMult.buyMultiplier;
            } else {
                usdAmount = (usdtPairBuy + usdtBuyMultiplier);
            }
            // ;
            if (to.name === 'USD') {
                currentRate = usdAmount;
            } else {
                if (to.name === 'EUR') {
                    toValue = config['EUR']?.['USD'];
                    currentRate = parseFloat(usdAmount / toValue.sell);   
                } else {
                    toValue = config['USD']?.[to.name];
                    currentRate = parseFloat(usdAmount * toValue.buy);
                }

            }
        }
        else if (from.type === 'fiat' && to.type === 'crypto' ) {
            let usdtAmount = null;
            if (from.name !== 'USD') {
                if (from.name === 'EUR') {
                    const euroPair = config['EUR']?.['USD'];
                    usdtAmount = (parseFloat(euroPair.buy) / usdtPairSell); 
                } else if (from.name === 'UAH') {
                    const usdPairMult = config['USD']?.[from.name];
                    usdtAmount = ((1 / parseFloat(usdPairMult.sell)) / usdtPairSell) + parseFloat(usdPairMult.buyMultiplier);
                } else {
                    const usdPairMult = config['USD']?.[from.name];
                    usdtAmount = (usdtPairSell * parseFloat(usdPairMult.sell)) + parseFloat(usdPairMult.buyMultiplier);
                }
                
            } else {
                usdtAmount = usdtPairBuy + usdtBuyMultiplier;
            }
            
            if (to.name === 'USDT') {
                currentRate = usdtAmount;
            } else {
                toValue = config['USDT']?.[to.name];
                currentRate = usdtAmount / parseFloat(1 / toValue.sell);
            }
        }
    } else {
        if (from.name === 'USDT') {
            currentRate = parseFloat(config['USDT']?.[to.name].buy) + parseFloat(config['USDT']?.[to.name].buyMultiplier);
        }
        else if (to.name === 'USDT') {
            currentRate = (1 / parseFloat(config['USDT']?.[from.name].buy)) + parseFloat(config['USDT']?.[from.name].buyMultiplier);
        }
        else {
            currentRate = (parseFloat(config['USDT']?.[to.name].sell) / parseFloat(config['USDT']?.[from.name].buy)) + parseFloat(config['USDT']?.[to.name].buyMultiplier);
        }
    }

    let sendAmount = '';
    let getAmount = '';
    
    store.dispatch(setExchangeRate(currentRate))
    if (direction === "from") {
        getAmount = parseFloat(amount * currentRate);
        sendAmount = parseFloat(amount);
    }
    if (direction === "to") {
        sendAmount = parseFloat(amount) / currentRate;
        getAmount = parseFloat(amount);
    }
    let change = {sendAmount: sendAmount >= 0 ? sendAmount : "", sendCurrency: from, getAmount: getAmount >= 0 ? getAmount : "", getCurrency: to};
    store.dispatch(setExchangeValue(change));
}