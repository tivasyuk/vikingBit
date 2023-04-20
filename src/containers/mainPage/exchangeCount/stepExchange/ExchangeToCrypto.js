import React from 'react';
import {connect} from 'react-redux';

import './stepExchange.scss';
import {selectIsLoggedIn, selectUserData} from "../../../../redux/modules/login/selectors";
import {selectExchangeValue} from "../../../../redux/modules/exchange/selectors";
import {setOrderExchangeData} from "../../../../utility/api";

class ExchangeToCrypto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 2,
            login: '',
            cardName: '',
            wallet: '',
            walletNumbers: '',
            transactionID: Math.floor(Math.random() * 100000) + 1,
            transactionDate: Date.now(),
            copyWalletWaiting: false,
            copySumWaiting: false,
            coupon: '',
            network: 'ERC-20',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onClickReturnToStepOne = () => {
        this.props.changeStep(1)
    }

    onClickReturnToStepTwo = () => {
        this.setState({step: 2});
    }

    onClickMoveToStepThree = () => {
        if (this.state.walletNumbers.length === 0) return;
        this.setState({step: 3});
    }

    onClickAccept = () => {
        const timestamp = Date.now();
        this.setState({
            step: 4,
            transactionDate: timestamp
        });

        //send all data
        setOrderExchangeData({
            transactionID: this.state.transactionID,
            currency: `${this.props.exchangeValue.sendCurrency}/${this.props.exchangeValue.getCurrency}`,
            fromSum: this.props.exchangeValue.sendAmount,
            toSum: this.props.exchangeValue.getAmount,
            coupon: this.state.coupon,
            network: this.state.network,
            wallet: this.state.walletNumbers,
            cardName: this.state.cardName,
            login: this.state.login,
            timestamp: timestamp,
            status: 'pending'
        }).then( () => {

        });
    }

    updateLogin = (val) => {
        this.setState({login: val})
    }

    updateWallet = (val) => {

        /*const cardValue = val
            .replace(/\D/g, '')
            .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
        val = !cardValue[2]
            ? cardValue[1]
            : `${cardValue[1]} ${cardValue[2]}${`${
                cardValue[3] ? ` ${cardValue[3]}` : ''
            }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
        const numbers = val.replace(/(\D)/g, '');*/

        this.setState({wallet: val, walletNumbers: val})
    }

    updateNetwork = (event) => {
        this.setState({network: event.target.value})
    }

    updateCoupon = (val) => {
        this.setState({coupon: val})
    }

    updateCardName = (val) => {
        this.setState({cardName: val})
    }

    onClickCopyWallet = () => {
        navigator.clipboard.writeText(this.props.getWallet)
            .then(() => {
                this.setState({copyWalletWaiting: true});
                setTimeout( () => {
                    this.setState({copyWalletWaiting: false});
                }, 1000);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });


    }
    onClickCopySum = () => {
        navigator.clipboard.writeText(this.props.exchangeValue.sendAmount)
            .then(() => {
                this.setState({copySumWaiting: true});
                setTimeout( () => {
                    this.setState({copySumWaiting: false});
                }, 1000);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });


    }

    render() {
        return (<div className="main-exchange-wrapper bg-opacity s2 cardToCrypto">
            <h1>Digital currency conversion service</h1>
            <div className={`f-home-fields step2 ${this.state.step !== 2 && ' hideStep'}`}>
                <h3>Step 2</h3>
                <h4>Enter the recipient's wallet address</h4>
                <div className="formFields">
                    <div className="col-md-4 ff-removable">
                        <div className="form-group mb-4">
                            <label>E-mail or Telegram</label>
                            <div className="form-field">
                                {this.props.isLoggedIn
                                    ? <p>{this.props.userData.email}</p>
                                    : <input className="form-control f-input"
                                           placeholder='login@yahoo.com | @login'
                                           onChange={e => {
                                               this.updateLogin(e.target.value)
                                           }}
                                           value={this.state.login} />
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ff-removable">
                        <div className="form-group mb-4">
                            <label>Network</label>
                            <div className="form-field">
                                <select className="form-control f-input"
                                        value={this.state.network}
                                        onChange={this.updateNetwork}
                                >
                                    <option key={'ERC-20'} value={'ERC-20'}>ERC-20</option>
                                    <option key={'TRC-20'} value={'TRC-20'}>TRC-20</option>
                                    <option key={'BEP-20'} value={'BEP-20'}>BEP-20</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ff-removable">
                        <div className="form-group mb-4">
                            <label>Wallet for receiving</label>
                            <div className="form-field">
                                <input className="form-control f-input"
                                       placeholder='For example: 0x7eB3fec4E5Ec111aDaCcA94E9483c2Cbc6fc9aA2'
                                       onChange={e => {
                                           this.updateWallet(e.target.value)
                                       }}
                                       value={this.state.wallet}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ff-removable">
                        <div className="form-group mb-4">
                            <label>Coupon</label>
                            <div className="form-field">
                                <input className="form-control f-input"
                                       placeholder='Coupon Code (If available)'
                                       onChange={e => {
                                           this.updateCoupon(e.target.value)
                                       }}
                                       value={this.state.coupon}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="change__block-footer">
                    <a className="btn btn-white" onClick={this.onClickReturnToStepOne}>Return back</a>
                    <a className={`btn${(this.state.walletNumbers.length > 0) ? '' : ' disable'}`} onClick={this.onClickMoveToStepThree}>Continue</a>
                </div>
            </div>

            <div className={`f-home-fields step3 ${this.state.step !== 3 && ' hideStep'}`}>
                <h3>Step 3</h3>
                <h4>Send tokens to continue the exchange</h4>

                <div className="formFields">
                    <div className="col-md-6 ff-removable">
                        <div className="form-group send">
                            <label>Wallet to send</label>
                            <span>{this.props.exchangeValue.sendCurrency} wallet: </span> {/*TODO: show correct name*/}
                            <div className="withCopyBtn">
                                <input value={this.props.getWallet} readOnly />
                                {navigator.clipboard && <div className={`copyButton${this.state.copyWalletWaiting ? ' active' : ''}`} onClick={this.onClickCopyWallet}><span className="copyButtonIcon" /></div>}
                            </div>
                            <div className="withCopyBtn">
                                <span>Sum:&nbsp;</span>{this.props.exchangeValue.sendAmount} {this.props.exchangeValue.sendCurrency}
                                {navigator.clipboard && <div className={`copyButton${this.state.copySumWaiting ? ' active' : ''}`} onClick={this.onClickCopySum}><span className="copyButtonIcon" /></div>}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 ff-removable getCryptoSection">
                        <div className="form-group get">
                                    <label>Your wallet</label>
                            {/*        <p><span>Sum: </span>{this.props.exchangeValue.getAmount} {this.props.exchangeValue.getCurrency}</p>*/}
                            {/*        <p><span>Coupon: </span>{this.state.coupon || '-'}</p>*/}
                            <span className="cardWallet">{this.state.wallet}</span>
                        </div>
                    </div>
                </div>

                <p>Press the button "Accept", you agree that you send {this.props.exchangeValue.sendAmount} {this.props.exchangeValue.sendCurrency} to get {this.props.exchangeValue.getAmount} {this.props.exchangeValue.getCurrency}.</p>
                <p>You will get your money after moderating.</p>

                <div className="change__block-footer">
                    <a className="btn btn-white" onClick={this.onClickReturnToStepTwo}>Return back</a>
                    <a className="btn btn-primary" onClick={this.onClickAccept}>Accept</a>
                    <div className="gotoPaymAgree">
                        Press the button "Accept", you agree with <a href="/" target="_blank">exchange rules</a>
                    </div>
                </div>

            </div>

            <div className={`f-home-fields step4 ${this.state.step !== 4 && ' hideStep'}`}>
                <h3>Transaction Details</h3>
                <div className="desc"><span className="desc-label">Transaction ID:</span> #<span>{this.state.transactionID}</span></div>
                <div className="desc"><span className="desc-label">Status:</span> <span className="status status-pending">Processing...</span></div>
                <div className="desc"><span className="desc-label">Created on:</span> <span>{("" + (new Date(this.state.transactionDate)).toLocaleString())}</span></div>
                <div className="desc"><span className="desc-label">Transaction amount:</span> {this.props.exchangeValue.sendAmount} {this.props.exchangeValue.sendCurrency} &#8658; {this.props.exchangeValue.getAmount} {this.props.exchangeValue.getCurrency}</div>
                <div className="desc"><span className="desc-label">Wallet:</span> {this.state.wallet}</div>


                <div>You will get your money after moderating.</div>

                <div className="change__block-footer">
                    <a className="btn" onClick={this.onClickReturnToStepOne}>Return to Main Page</a>
                </div>

            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: selectIsLoggedIn(state),
        userData: selectUserData(state),
        exchangeValue: selectExchangeValue(state),
        getWallet: "0x6465146532146863513146465", //TODO: getCorrectWallet
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeToCrypto);