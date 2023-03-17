import React from 'react';
import {connect} from 'react-redux';

import './rightSideExchange.scss';
import btc from "../../../../../img/exchangeIcons/bitcoin.svg";
import eth from "../../../../../img/exchangeIcons/ethereum.svg";
import mono from "../../../../../img/exchangeIcons/ps-monobank.png";
import privat from "../../../../../img/exchangeIcons/privat24.svg";
import euroCard from "../../../../../img/exchangeIcons/ps-visamc.png";
import usdt from "../../../../../img/exchangeIcons/tether.svg";
import cash from "../../../../../img/exchangeIcons/cash.png";
import Checkbox from "../../../../../components/checkbox/Checkbox";
import {exchangeConverter} from "../../../../../utility/exchangeData";
import {selectExchangeRate, selectExchangeValue} from "../../../../../redux/modules/exchange/selectors";

class RightSideExchange extends React.Component {
    constructor(props) {
        super(props);

        let sendExchangeListDataItems = [
            { name: 'Bitcoin', currency: 'BTC', imgSrc: btc },
            { name: 'Ethereum', currency: 'ETH', imgSrc: eth },
            { name: 'Monobank', currency: 'UAH', imgSrc: mono },
            { name: 'Privat 24 UAH', currency: 'UAH', imgSrc: privat },
            { name: 'Visa/MasterCard EUR', currency: 'EUR', imgSrc: euroCard },
        ]

        let getExchangeListDataItems = [
            { name: 'USDT', currency: 'USDT', imgSrc: usdt },
            { name: 'Cash EUR', currency: 'EUR', imgSrc: cash },
            { name: 'Cash USD', currency: 'USD', imgSrc: cash },
            { name: 'Visa/MasterCard EUR', currency: 'EUR', imgSrc: euroCard },
        ]

        this.state = {
            checkAgree: false,
            showSendExchangeList: false,
            showGetExchangeList: false,
            enterSendAmount: '',
            enterGetAmount: '',
            sendExchangeListData: sendExchangeListDataItems,
            sendExchangeData: sendExchangeListDataItems[0],
            getExchangeListData: getExchangeListDataItems,
            getExchangeData: getExchangeListDataItems[0],
        }

        exchangeConverter(this.state.getExchangeData.currency, this.state.sendExchangeData.currency)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.exchangeValue !== prevProps.exchangeValue) {
            if(this.props.exchangeValue.get === parseFloat(this.state.enterGetAmount)) {
                this.setState({enterSendAmount: this.props.exchangeValue.send})
            }
            if(this.props.exchangeValue.send === parseFloat(this.state.enterSendAmount)) {
                this.setState({enterGetAmount: this.props.exchangeValue.get})
            }
        }
    }

    addSendExchangeListData = () => {
        const items = this.state.sendExchangeListData.map((item, index) => {
            return <div className="item currency__item psItem" key={item.name + index} onClick={ () => {this.onClickSendExchangeSelect(item)}}>
                <div className="item-img">
                    <img alt={item.name} src={item.imgSrc}/>
                </div>
                <div className="item-title">{item.name}</div>
                <span>{item.currency}</span>
            </div>
        })

        return <div className="main-exchange-list-content val-list billPsList">
            {items}
        </div>
    }

    addGetExchangeListData = () => {
        const items = this.state.getExchangeListData.map((item, index) => {
            return <div className="item currency__item psItem" key={item.name + index} onClick={ () => {this.onClickGetExchangeSelect(item)}}>
                <div className="item-img">
                    <img alt={item.name} src={item.imgSrc}/>
                </div>
                <div className="item-title">{item.name}</div>
                <span>{item.currency}</span>
            </div>
        })

        return <div className="main-exchange-list-content val-list billPsList">
            {items}
        </div>
    }

    onClickSendExchangeSelect = (item) => {
        this.setState({sendExchangeData: item, showSendExchangeList: false, enterSendAmount: '', enterGetAmount: ''})

        exchangeConverter(this.state.getExchangeData.currency, item.currency, this.state.enterSendAmount, "from")
    }

    onClickGetExchangeSelect = (item) => {
        this.setState({getExchangeData: item, showGetExchangeList: false, enterSendAmount: '', enterGetAmount: ''})

        exchangeConverter(item.currency, this.state.sendExchangeData.currency, this.state.enterGetAmount, "to")
    }

    onAgreeCheckboxClick = () => {
        this.setState({checkAgree: !this.state.checkAgree});
    }

    onClickSendExchangeList = () => {
        this.setState({showSendExchangeList: !this.state.showSendExchangeList, showGetExchangeList: false});
    }

    onClickGetExchangeList = () => {
        this.setState({showGetExchangeList: !this.state.showGetExchangeList, showSendExchangeList: false});
    }

    updateSendAmount = (val) => {
        this.setState({enterSendAmount: val})
        exchangeConverter(this.state.getExchangeData.currency, this.state.sendExchangeData.currency, val, "from")
    }

    updateGetAmount = (val) => {
        this.setState({enterGetAmount: val})
        exchangeConverter(this.state.getExchangeData.currency, this.state.sendExchangeData.currency, val, "to")
    }

    onClickExchange = () => {
        this.props.changeStep(2);
        this.state.getExchangeData.name.includes('Cash') ? this.props.getType('cash') : this.props.getType('');
    }

    render() {
        return (<div className="main-right s1">
            <div className="main-exchange-wrapper bg-opacity">
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
                            <span id="f-currency-from">{this.state.sendExchangeData.currency}</span>
                        </div>
                        <div className="main-exchange-valute send-valute" onClick={this.onClickSendExchangeList}>
                            <div className="main-exchange-valute-wrapper">
                                <img alt={this.state.sendExchangeData.name} src={this.state.sendExchangeData.imgSrc}/>
                                <span>{this.state.sendExchangeData.name}</span>
                            </div>
                        </div>
                        <div className={`main-exchange-list${this.state.showSendExchangeList ? ' visible' : ''}`}>
                            {this.addSendExchangeListData()}
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
                            <span id="f-currency-to">{this.state.getExchangeData.currency}</span>
                        </div>
                        <div className="main-exchange-valute get-valute" onClick={this.onClickGetExchangeList}>
                            <div className="main-exchange-valute-wrapper">
                                <img alt={this.state.getExchangeData.name} src={this.state.getExchangeData.imgSrc}/>
                                <span>{this.state.getExchangeData.name}</span>
                            </div>
                        </div>
                        <div className={`main-exchange-list${this.state.showGetExchangeList ? ' visible' : ''}`}>
                            {this.addGetExchangeListData()}
                        </div>
                    </div>
                </div>

                <div className="main-exchange-bottom-info">
                    <div className="col min-summa">
                        <div className="col-wrap from_min_amount">
                            <span>Min. sum</span>
                            <strong>{this.props.exchangeRate.minSum} {this.state.sendExchangeData.currency}</strong>
                        </div>
                    </div>
                    <div className="col course">
                        <div className="col-wrap">
                            <span>Exchange rate</span>
                            <strong>1 {this.state.sendExchangeData.currency} - {this.props.exchangeRate.rate} {this.state.getExchangeData.currency}</strong>
                        </div>
                    </div>
                    <div className="col reserve">
                        <div className="col-wrap" id="h-reserve">
                            <span>Reserve</span>
                            <strong>{this.props.exchangeRate.reverse} {this.state.getExchangeData.currency}</strong>
                        </div>
                    </div>
                </div>

                {
                    this.state.getExchangeData.name.includes('Cash') &&
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
                    <a className={`btn${!this.state.checkAgree ? ' disable' : ''}`} id="showProps" onClick={this.onClickExchange}>Exchange</a>
                </div>
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
        return {
            exchangeRate: selectExchangeRate(state),
            exchangeValue: selectExchangeValue(state),
        }
    }
;

export const mapDispatchToProps = (dispatch) => {
        return {}
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(RightSideExchange);