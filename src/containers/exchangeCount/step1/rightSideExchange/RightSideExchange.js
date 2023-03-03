import React from 'react';
import {connect} from 'react-redux';

import './rightSideExchange.scss';
import btc from "../../../../img/bitcoin.svg";
import eth from "../../../../img/ethereum.svg";
import mono from "../../../../img/ps-monobank.png";
import privat from "../../../../img/privat24.svg";
import euroCard from "../../../../img/ps-visamc.png";
import usdt from "../../../../img/usdt.png";
import Checkbox from "../../../../components/checkbox/Checkbox";

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

        this.state = {
            checkAgree: false,
            showSendExchangeList: false,
            enterSendAmount: '',
            enterGetAmount: '',
            sendExchangeListData: sendExchangeListDataItems,
            sendExchangeData: sendExchangeListDataItems[0],
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    addSendExchangeListData = () => {
        const items = this.state.sendExchangeListData.map((item, index) => {
            return <div className="item currency__item psItem" key={item.name + index} onClick={ () => {this.onClickSendExchangeSelect(item)}}>
                <div className="item-img">
                    <img alt="bitcoin" src={item.imgSrc}/>
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
        this.setState({sendExchangeData: item, showSendExchangeList: false})
    }

    onAgreeCheckboxClick = () => {
        this.setState({checkAgree: !this.state.checkAgree});
    }

    onClickSendExchangeList = () => {
        this.setState({showSendExchangeList: !this.state.showSendExchangeList});
    }

    updateSendAmount = (val) => {
        this.setState({
            enterSendAmount: val,
        })
    }

    updateGetAmount = (val) => {
        this.setState({
            enterGetAmount: val,
        })
    }

    onClickExchange = () => {
        this.props.onChangeStep(2)
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
                                <img alt="bitcoin" src={this.state.sendExchangeData.imgSrc}/><span>{this.state.sendExchangeData.name}</span>
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
                            <span id="f-currency-to">USDT</span>
                        </div>
                        <div className="main-exchange-valute get-valute">
                            <div className="main-exchange-valute-wrapper">
                                <img alt="tether" src={usdt} id="img_to"/>
                                <span id="ps-name-to">USDT</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="main-exchange-bottom-info">
                    <div className="col min-summa">
                        <div className="col-wrap from_min_amount">
                            <span>Min. sum</span>
                            <strong id="mainMin">0.01142153 BTC</strong>
                        </div>
                    </div>
                    <div className="col course">
                        <div className="col-wrap">
                            <span>Exchange rate</span>
                            <strong id="h-course">1 BTC - 21885.88730068 USDT</strong>
                        </div>
                    </div>
                    <div className="col reserve">
                        <div className="col-wrap" id="h-reserve">
                            <span>Reserve</span>
                            <strong>72 168 426.01 USDT</strong>
                        </div>
                    </div>
                </div>

                <div className="main-exchange-bottom">
                    <Checkbox
                        name={`I agree with <a href="#"> the rules of the exchange</a>`}
                        isChecked={this.state.checkAgree}
                        onClickHandler={this.onAgreeCheckboxClick}
                    />
                    <a className="btn" id="showProps" onClick={this.onClickExchange}>Exchange</a>
                </div>
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
        return {}
    }
;

export const mapDispatchToProps = (dispatch) => {
        return {}
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(RightSideExchange);