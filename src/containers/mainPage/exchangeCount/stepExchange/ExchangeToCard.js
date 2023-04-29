import React from 'react';
import {connect} from 'react-redux';
import './stepExchange.scss';
import {selectIsLoggedIn, selectUserData} from "../../../../redux/modules/login/selectors";
import {selectExchangeValues, selectExchangeScreenState} from "../../../../redux/modules/exchange/selectors";
import {putOrderExchangeData, setScreenState } from '../../../../redux/modules/exchange/actions';

class ExchangeCardToCrypto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            cardName: '',
            wallet: '',
            walletNumbers: '',
            transactionID: Math.floor(Math.random() * 100000) + 1,
            copyWalletWaiting: false,
            copySumWaiting: false,
            coupon: '',
            network: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onClickReturnToStepOne = () => {
        this.props.onScreenStateChange({ screenStep: 1 });
    }

    onClickReturnToStepTwo = () => {
        this.props.onScreenStateChange({ screenStep: 2 });
    }

    onClickMoveToStepThree = () => {
        if (this.state.cardName.length <= 0 || this.state.walletNumbers.length !== 16) return;
        this.props.onScreenStateChange({ screenStep: 3 });
    }

    onClickAccept = () => {
        //send all data
        this.props.onPutOrderExchangeData({
            transactionID: this.state.transactionID,
            fromSum: {value: this.props.exchangeValues.sendAmount, currency:this.props.exchangeValues.sendCurrency.name},
            toSum: {value: this.props.exchangeValues.getAmount, currency: this.props.exchangeValues.getCurrency.name},
            coupon: this.state.coupon,
            network: this.state.network,
            wallet: this.state.walletNumbers,
            cardName: this.state.cardName,
            login: this.state.login,
            timestamp: Date.now(),
            status: 'pending'
        });
        window.location.href = `http://localhost:3000/order?id=${this.state.transactionID}`;
    }

    updateLogin = (val) => {
        this.setState({login: val})
    }

    updateWallet = (val) => {

        const cardValue = val
            .replace(/\D/g, '')
            .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
        val = !cardValue[2]
            ? cardValue[1]
            : `${cardValue[1]} ${cardValue[2]}${`${
                cardValue[3] ? ` ${cardValue[3]}` : ''
            }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
        const numbers = val.replace(/(\D)/g, '');

        this.setState({wallet: val, walletNumbers: numbers})
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
        navigator.clipboard.writeText(this.props.exchangeValues.sendAmount)
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
            <div className={`f-home-fields step2 ${this.props.screenState.screenStep !== 2 && ' hideStep'}`}>
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
                            <label>Credit card number</label>
                            <div className="form-field">
                                <input className="form-control f-input"
                                       placeholder='4111 1111 1111 1111'
                                       onChange={e => {
                                           this.updateWallet(e.target.value)
                                       }}
                                       value={this.state.wallet}
                                       inputMode={"numeric"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ff-removable">
                        <div className="form-group mb-4">
                            <label>Name on card</label>
                            <div className="form-field">
                                <input className="form-control f-input"
                                       placeholder='John Smith'
                                       onChange={e => {
                                           this.updateCardName(e.target.value)
                                       }}
                                       value={this.state.cardName}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="change__block-footer">
                    <a className="btn btn-white" onClick={this.onClickReturnToStepOne}>Return back</a>
                    <a className={`btn${(this.state.cardName.length > 0 && this.state.walletNumbers.length === 16) ? '' : ' disable'}`} onClick={this.onClickMoveToStepThree}>Continue</a>
                </div>
            </div>

            <div className={`f-home-fields step3 ${this.props.screenState.screenStep !== 3 && ' hideStep'}`}>
                <h3>Step 3</h3>
                <h4>Send tokens to continue the exchange</h4>

                <div className="formFields">
                    <div className="col-md-6 ff-removable">
                        <div className="form-group send">
                            <label>Wallet to send</label>
                            <span>{this.props.exchangeValues.sendCurrency.name} wallet: </span> {/*TODO: show correct name*/}
                            <div className="withCopyBtn">
                                <input value={this.props.getWallet} readOnly />
                                {navigator.clipboard && <div className={`copyButton${this.state.copyWalletWaiting ? ' active' : ''}`} onClick={this.onClickCopyWallet}><span className="copyButtonIcon" /></div>}
                            </div>
                            <div className="withCopyBtn">
                                <span>Sum:&nbsp;</span>{this.props.exchangeValues.sendAmount} {this.props.exchangeValues.sendCurrency.name}
                                {navigator.clipboard && <div className={`copyButton${this.state.copySumWaiting ? ' active' : ''}`} onClick={this.onClickCopySum}><span className="copyButtonIcon" /></div>}
                            </div>
                        </div>
                    </div>

                    {/*<div className="col-md-6 ff-removable">*/}
                    {/*    <div className="form-group get">*/}
                    {/*        <label>Your get data</label>*/}
                    {/*        <p><span>Card: </span>{this.state.wallet}</p>*/}
                    {/*        <p><span>Name on card: </span>{this.state.cardName}</p>*/}
                    {/*        <p><span>Sum: </span>{this.props.exchangeValues.getAmount} {this.props.exchangeValues.getCurrency}</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="col-md-6 ff-removable getCardSection">
                        <div className="form-group get">
                            <span className="cardWallet">{this.state.wallet}</span>
                            <span className="cardName">{this.state.cardName}</span>
                        </div>
                    </div>
                </div>

                <p>Press the button "Accept", you agree that you send {this.props.exchangeValues.sendAmount} {this.props.exchangeValues.sendCurrency.name} to get {this.props.exchangeValues.getAmount} {this.props.exchangeValues.getCurrency.name}.</p>
                <p>You will get your money after moderating.</p>

                <div className="change__block-footer">
                    <a className="btn btn-white" onClick={this.onClickReturnToStepTwo}>Return back</a>
                    <a className="btn btn-primary" onClick={this.onClickAccept}>Accept</a>
                    <div className="gotoPaymAgree">
                        Press the button "Accept", you agree with <a href="/" target="_blank">exchange rules</a>
                    </div>
                </div>

            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: selectIsLoggedIn(state),
        userData: selectUserData(state),
        exchangeValues: selectExchangeValues(state),
        getWallet: "0x6465146532146863513146465", //TODO: getCorrectWallet
        screenState: selectExchangeScreenState(state)
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onScreenStateChange: screenState => {
            dispatch(setScreenState(screenState));
        },
        onPutOrderExchangeData: orderData => {
            dispatch(putOrderExchangeData(orderData));
        }
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCardToCrypto);