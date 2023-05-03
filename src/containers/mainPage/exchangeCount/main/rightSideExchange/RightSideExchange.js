import React from 'react';
import { connect } from 'react-redux';

import './rightSideExchange.scss';
import euroCard from "../../../../../img/exchangeIcons/ps-visamc.png";
import cash from "../../../../../img/exchangeIcons/cash.png";
import Checkbox from "../../../../../components/checkbox/Checkbox";
import { exchangeConverter } from "../../../../../utility/exchangeData";
import { selectExchangeRate, selectExchangeValues } from "../../../../../redux/modules/exchange/selectors";
import { setScreenState } from '../../../../../redux/modules/exchange/actions';
import { selectCurrencyList } from '../../../../../redux/modules/state/selectors';

class RightSideExchange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkAgree: false,
            showSendExchangeList: false,
            showGetExchangeList: false,
            showFiatSendExchangeTypeList: false,
            showFiatGetExchangeTypeList: false,
            enterSendAmount: props.exchangeValues.sendAmount || '',
            enterGetAmount: props.exchangeValues.getAmount || '',
            selectedFiatSendExchangeType: {
                name:'',
                img: ''
            },
            selectedFiatGetExchangeType: {
                name:'',
                img: ''
            },
            sendExchangeData: props.exchangeValues.sendCurrency || {
                name: '',
                img: ''
            },
            getExchangeData: props.exchangeValues.getCurrency || {
                name: '',
                img: ''
            }
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.exchangeValues !== prevProps.exchangeValues) {
            if (this.props.exchangeValues.getAmount === (parseFloat(this.state.enterGetAmount) || this.state.enterGetAmount)) {
                this.setState({ enterSendAmount: this.props.exchangeValues.sendAmount })
            }
            if (this.props.exchangeValues.sendAmount === (parseFloat(this.state.enterSendAmount) || this.state.enterSendAmount)) {
                this.setState({ enterGetAmount: this.props.exchangeValues.getAmount })
            }
        }
        if (this.props.currencyList) {
            if (this.state.sendExchangeData.name === '') {
                this.setState({
                    sendExchangeData: this.props.exchangeValues.sendCurrency || this.props.currencyList['BTC'],
                })
            }
            if (this.state.getExchangeData.name === '') {
                this.setState({
                    getExchangeData: this.props.exchangeValues.getCurrency || this.props.currencyList['USDT']
                })
            }
        }
    }

    addExchangeListData = (currencyList, type) => {
        let index = 0;
        const itemsArray = [];
        for (const key in currencyList) {
            index += 1;
            const item = currencyList[key];
            itemsArray.push(  
                <div className="item currency__item psItem" key={item.name + index} onClick={() => { type === 'send'? this.onClickSendExchangeSelect(item) : this.onClickGetExchangeSelect(item) }}>
                    <div className="item-img">
                        <img alt={item.name} src={item.img} />
                    </div>
                    <div className="item-title">{item.name}</div>
                    <span>{key}</span>
                </div>
            )
        }
        return <div className="main-exchange-list-content val-list billPsList">
            {itemsArray}
        </div>;
    }

    addFiatExchangeTypesListData = (type) => {
        const fiatTypes = [
            {
                name: 'Cash',
                img: cash
            },
            {
                name: 'Visa/Mastercard',
                img: euroCard
            }
        ]
        const itemsArray = fiatTypes.map((item, index) => {
            return <div className="item currency__item psItem" key={item.name + index} onClick={() => { type === 'send'? this.onSelectedSendFiatExchangeType(item) : this.onSelectedGetFiatExchangeType(item) }}>
                <div className="item-img">
                    <img alt={item.name} src={item.img} />
                </div>
                <div className="item-title">{item.name}</div>
            </div>
        })

        return <div className="main-exchange-list-content val-list billPsList">
            {itemsArray}
        </div>;
    }

    onClickSendExchangeSelect = (item) => {
        this.setState({ sendExchangeData: item, showSendExchangeList: false, enterSendAmount: '', enterGetAmount: '' })

        exchangeConverter(this.state.getExchangeData, item, this.state.enterSendAmount, "from")
    }

    onSelectedSendFiatExchangeType = (type) => {
        this.setState({selectedFiatSendExchangeType: type, showFiatSendExchangeTypeList: false})
    }
    onSelectedGetFiatExchangeType = (type) => {
        this.setState({selectedFiatGetExchangeType: type, showFiatGetExchangeTypeList: false})
    }

    onClickGetExchangeSelect = (item) => {
        this.setState({ getExchangeData: item, showGetExchangeList: false, enterSendAmount: '', enterGetAmount: '' })

        exchangeConverter(item, this.state.sendExchangeData, this.state.enterGetAmount, "to")
    }

    onAgreeCheckboxClick = () => {
        this.setState({ checkAgree: !this.state.checkAgree });
    }

    onClickSendExchangeList = () => {
        this.setState({ showSendExchangeList: !this.state.showSendExchangeList, showGetExchangeList: false });
    }

    onClickGetExchangeList = () => {
        this.setState({ showGetExchangeList: !this.state.showGetExchangeList, showSendExchangeList: false });
    }

    onShowFiatSendExchangeTypeList = () => {
        this.setState({ showFiatSendExchangeTypeList: !this.state.showFiatSendExchangeTypeList,
            showSendExchangeList: false, showGetExchangeList: false, showFiatGetExchangeTypeList: false});
    }
    onShowFiatGetExchangeTypeList = () => {
        this.setState({ showFiatGetExchangeTypeList: !this.state.showFiatGetExchangeTypeList,
            showSendExchangeList: false, showGetExchangeList: false, showFiatSendExchangeTypeList: false});
    }

    updateSendAmount = (val) => {
        this.setState({ enterSendAmount: val })
        exchangeConverter(this.state.getExchangeData, this.state.sendExchangeData, val, "from")
    }

    updateGetAmount = (val) => {
        this.setState({ enterGetAmount: val })
        exchangeConverter(this.state.getExchangeData, this.state.sendExchangeData, val, "to")
    }

    onClickExchange = () => {
        if (!this.state.checkAgree || this.state.enterGetAmount < this.state.getExchangeData.minExchange) return;
        let exchangeType = '';
        if (this.state.getExchangeData.type === 'fiat' && this.state.selectedFiatGetExchangeType.name === 'Cash') exchangeType = 'toCash'
        else if (this.state.sendExchangeData.type === 'fiat' && this.state.selectedFiatSendExchangeType.name === 'Cash') exchangeType = 'toCash'
        else if (this.state.getExchangeData.type === 'fiat' && this.state.selectedFiatGetExchangeType.name === 'Visa/Mastercard') exchangeType = 'toCard'
        else exchangeType = 'toCrypto';
        this.props.onScreenStateChange({screenStep: 2, exchangeType});
    }

    render() {
        return (<div className="main-right s1">
            {this.props.currencyList && <div className="main-exchange-wrapper bg-opacity">
                <div className="main-exchange">
                    <h3>You send <span className="right-min from_min_amount">Min. sum <strong>100 USDC</strong></span></h3>
                    <div className="main-exchange-inputs exch-val-cont">
                        <div className="main-exchange-input" id="leftSumm">
                            <input className="f-input"
                                placeholder='The amount'
                                onChange={e => { this.updateSendAmount(e.target.value) }}
                                value={this.state.enterSendAmount}
                                type="number"
                                autoComplete="off"
                                inputMode="decimal"
                            />
                        </div>
                        <div className="main-exchange-valute send-valute" onClick={this.onClickSendExchangeList}>
                            <div className="main-exchange-valute-wrapper">
                                <img alt={this.state.sendExchangeData.name} src={this.state.sendExchangeData.img} />
                                <span>{this.state.sendExchangeData.name}</span>
                            </div>
                        </div>
                        <div className={`main-exchange-list${this.state.showSendExchangeList ? ' visible' : ''}`}>
                            {this.addExchangeListData(this.props.currencyList, 'send')}
                        </div>
                    </div>
                </div>

                <div className="main-exchange" data-side="to">
                    <h3>You get</h3>
                    <div className="main-exchange-inputs exch-val-cont">
                        <div className="main-exchange-input" id="rightSumm">
                            <input className="f-input"
                                placeholder='The amount'
                                onChange={e => { this.updateGetAmount(e.target.value) }}
                                value={this.state.enterGetAmount}
                                type="number"
                                autoComplete="off"
                                inputMode="decimal"
                            />
                        </div>
                        <div className="main-exchange-valute get-valute" onClick={this.onClickGetExchangeList}>
                            <div className="main-exchange-valute-wrapper">
                                <img alt={this.state.getExchangeData.name} src={this.state.getExchangeData.img} />
                                <span>{this.state.getExchangeData.name}</span>
                            </div>
                        </div>
                        <div className={`main-exchange-list${this.state.showGetExchangeList ? ' visible' : ''}`}>
                            {this.addExchangeListData(this.props.currencyList, 'get')}
                        </div>
                    </div>
                </div>

                {
                    this.state.sendExchangeData.type === 'fiat' &&
                    <div className="main-exchange">
                        <h3>Select preferred send exchange type</h3>
                        <div className="main-exchange-inputs exch-val-cont">
                            <div className="main-exchange-valute prefer-cash-valute" onClick={this.onShowFiatSendExchangeTypeList}>
                                <div className="main-exchange-valute-wrapper">
                                    <img alt={this.state.selectedFiatSendExchangeType.name} src={this.state.selectedFiatSendExchangeType.img} />
                                    <span>{this.state.selectedFiatSendExchangeType.name}</span>
                                </div>
                            </div>
                            <div className={`main-exchange-list${this.state.showFiatSendExchangeTypeList ? ' visible' : ''}`}>
                                {this.addFiatExchangeTypesListData('send')}
                            </div>
                        </div>
                    </div>
                }

                {
                    this.state.getExchangeData.type === 'fiat' &&
                    <div className="main-exchange">
                        <h3>Select preferred get exchange type</h3>
                        <div className="main-exchange-inputs exch-val-cont">
                            <div className="main-exchange-valute prefer-cash-valute" onClick={this.onShowFiatGetExchangeTypeList}>
                                <div className="main-exchange-valute-wrapper">
                                    <img alt={this.state.selectedFiatGetExchangeType.name} src={this.state.selectedFiatGetExchangeType.img} />
                                    <span>{this.state.selectedFiatGetExchangeType.name}</span>
                                </div>
                            </div>
                            <div className={`main-exchange-list${this.state.showFiatGetExchangeTypeList ? ' visible' : ''}`}>
                                {this.addFiatExchangeTypesListData('get')}
                            </div>
                        </div>
                    </div>
                }

                {this.state.getExchangeData.name && this.state.sendExchangeData.name && <div className="main-exchange-bottom-info">
                    <div className="col min-summa">
                        <div className="col-wrap from_min_amount">
                            <span>Min. sum</span>
                            <strong>{this.state.getExchangeData.minExchange} {this.state.getExchangeData.name}</strong>
                        </div>
                    </div>
                    <div className="col course">
                        <div className="col-wrap">
                            <span>Exchange rate</span>
                            <strong>1 {this.state.sendExchangeData.name} - {this.props.exchangeRate} {this.state.getExchangeData.name}</strong>
                        </div>
                    </div>
                    <div className="col reserve">
                        <div className="col-wrap" id="h-reserve">
                            <span>Reserve</span>
                            <strong>{this.state.getExchangeData.reserve} {this.state.getExchangeData.name}</strong>
                        </div>
                    </div>
                </div>}

                {
                    (this.state.selectedFiatSendExchangeType.name === 'Cash' ||
                    this.state.selectedFiatGetExchangeType.name === 'Cash') &&
                    <div className="main-exchange-bottom-info">
                        <div className="col cashInfo">
                            <div className="col-wrap">
                                <span>Exchange percent</span>
                                <strong>2000$ &lt; 15$</strong>
                                <strong>2000$ &gt; 2%</strong>
                            </div>
                        </div>
                    </div>
                }

                <div className="main-exchange-bottom">
                    <Checkbox
                        name={`I agree with <a href="#"> the rules of the exchange</a>`}
                        isChecked={this.state.checkAgree}
                        onClickHandler={this.onAgreeCheckboxClick}
                    />
                    <a className={`btn${(!this.state.checkAgree || this.state.enterGetAmount < this.state.getExchangeData.minExchange) ? ' disable' : ''}`} id="showProps" onClick={this.onClickExchange}>Exchange</a>
                </div>
            </div>}
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {
        exchangeRate: selectExchangeRate(state),
        exchangeValues: selectExchangeValues(state),
        currencyList: selectCurrencyList(state),
    }
}
    ;

export const mapDispatchToProps = (dispatch) => {
    return {
        onScreenStateChange: screenState => {
            dispatch(setScreenState(screenState));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideExchange);