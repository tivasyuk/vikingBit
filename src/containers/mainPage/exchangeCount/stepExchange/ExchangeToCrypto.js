import React from 'react';
import {connect} from 'react-redux';

import './stepExchange.scss';
import {selectIsLoggedIn, selectUserData} from "../../../../redux/modules/login/selectors";
import {selectExchangeValues, selectExchangeScreenState} from "../../../../redux/modules/exchange/selectors";
import {putOrderExchangeData, setScreenState } from '../../../../redux/modules/exchange/actions';
import {selectAppConfig} from "../../../../redux/modules/state/selectors";
import {CRYPTO_NETWORKS, CRYPTO_WALLETS, DOMAIN_NAME, SERVER_URL} from "../../../../constants/Constants";
import {withTranslation} from 'react-i18next'; 


class ExchangeToCrypto extends React.Component {
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
            network: CRYPTO_NETWORKS[this.props.exchangeValues.getCurrency.name][0] || '',
            paymentProof: '',
            screenshot: null,
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
        if (this.state.walletNumbers.length === 0) return;
        this.props.onScreenStateChange({ screenStep: 3 });
    }

    onClickAccept = () => {
        if ((this.props.exchangeValues.sendCurrency.type === 'fiat' && this.state.screenshot) ||
            (this.props.exchangeValues.sendCurrency.type === 'crypto' && this.state.paymentProof)) {
            //send all data
            this.props.onPutOrderExchangeData({
                transactionID: this.state.transactionID,
                fromSum: {value: this.props.exchangeValues.sendAmount, currency:this.props.exchangeValues.sendCurrency.name},
                toSum: {value: this.props.exchangeValues.getAmount, currency: this.props.exchangeValues.getCurrency.name},
                coupon: this.state.coupon,
                proofHash: this.state.paymentProof,
                proofImage: this.state.screenshot,
                network: this.state.network,
                wallet: this.state.walletNumbers,
                cardName: this.state.cardName,
                login: this.state.login,
                timestamp: Date.now(),
                status: 'pending'
            });
        }
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

    updatePaymentProof = (val) => {
        this.setState({paymentProof: val})
    }

    onClickCopyWallet = () => {
        navigator.clipboard.writeText(this.props.wallets && this.props.wallets[CRYPTO_WALLETS[this.props.exchangeValues.sendCurrency.type]])
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

    handleAddImage = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0], 'console of side image')
            this.setState({screenshot: e.target.files[0]})
        }
    }

    getNetworkList = () => {
        return CRYPTO_NETWORKS[this.props.exchangeValues.getCurrency.name].map( item => {
            return <option key={item} value={item}>{item}</option>;
        })
    }

    render() {
            const { t } = this.props
        return (<div className="main-exchange-wrapper bg-opacity s2 cardToCrypto">
            <h1> {t('digitalcurrencyconvserv')} </h1>
            <div className={`f-home-fields step2 ${this.props.screenState.screenStep !== 2 && ' hideStep'}`}>
                <h3> {t('exchByStep')} </h3>
                <h4> {t('entrRecipintWallet')} </h4>
                <div className="formFields">
                    <div className="col-md-4 ff-removable">
                        <div className="form-group mb-4">
                            <label>E-mail / Telegram</label>
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
                                    {this.getNetworkList()}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ff-removable">
                        <div className="form-group mb-4">
                            <label> {t('walletForReceiving')}</label>
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
                            <label> {t('coupon')} </label>
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
                    <a className="btn btn-white" onClick={this.onClickReturnToStepOne}> {t('returnBackBtn')} </a>
                    <a className={`btn${(this.state.walletNumbers.length > 0) ? '' : ' disable'}`} onClick={this.onClickMoveToStepThree}>{t('continue')}</a>
                </div>
            </div>

            <div className={`f-home-fields step3 ${this.props.screenState.screenStep !== 3 && ' hideStep'}`}>
                <h3>{t('exchByStepThree')}</h3>
                <h4> {t('sendtokenstocontinue')} </h4>
                <div className="formFields">
                    <div className="col-md-6 ff-removable">
                        <div className="form-group send">
                            <label> {t('wallettosend')} </label>
                            {this.props.exchangeValues.sendCurrency.type === 'crypto' && <div className="formFields">
                                <div id="walletImg" style={{backgroundImage: 'url(../../../../img/wallets/BTC.jpg)'}}></div>
                            </div>}
                            <span>{this.props.exchangeValues.sendCurrency.name} {t('towallett')} : </span>
                            <div className="withCopyBtn">
                                <input value={this.props.wallets && this.props.wallets[CRYPTO_WALLETS[this.props.exchangeValues.sendCurrency.type]]} readOnly />
                                {navigator.clipboard && <div className={`copyButton${this.state.copyWalletWaiting ? ' active' : ''}`} onClick={this.onClickCopyWallet}><span className="copyButtonIcon" /></div>}
                            </div>
                            <div className="withCopyBtn">
                                <span> {t('sum')} :&nbsp;</span>{this.props.exchangeValues.sendAmount} {this.props.exchangeValues.sendCurrency.name}
                                {navigator.clipboard && <div className={`copyButton${this.state.copySumWaiting ? ' active' : ''}`} onClick={this.onClickCopySum}><span className="copyButtonIcon" /></div>}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 ff-removable getCryptoSection">
                        <div className="form-group get">
                                    <label> {t('yourwallet')} </label>
                            {/*        <p><span>Sum: </span>{this.props.exchangeValues.getAmount} {this.props.exchangeValues.getCurrency}</p>*/}
                            {/*        <p><span>Coupon: </span>{this.state.coupon || '-'}</p>*/}
                            <span className="cardWallet">{this.state.wallet}</span>
                        </div>
                    </div>
                </div>

                <div className="paymentProofField">
                    <div className="form-group">
                        {
                            this.props.exchangeValues.sendCurrency.type === 'fiat' &&
                            <div className="col-md-6 ff-removable">
                                <span>{t('attachurscreenofpay')} : </span>
                                <input
                                    type='file'
                                    placeholder='Screenshot'
                                    onChange={(e) => this.handleAddImage(e)}
                                    //value={this.state.screenshot}
                                />
                            </div>
                        }

                        {
                            this.props.exchangeValues.sendCurrency.type === 'crypto' &&
                            <div className="col-md-6 ff-removable">
                                <span> {t('addurpayment')} </span>
                                <input className="f-input"
                                       placeholder='Payment hash'
                                       onChange={e => { this.updatePaymentProof(e.target.value) }}
                                       value={this.state.paymentProof}
                                       autoComplete="off"
                                />
                            </div>
                        }
                    </div>
                </div>

                <p> {t('pressbtnAccept')}  {this.props.exchangeValues.sendAmount} {this.props.exchangeValues.sendCurrency.name} {t('toget')} {this.props.exchangeValues.getAmount} {this.props.exchangeValues.getCurrency.name}.</p>
                <p> {t('uwillgetmoney')} </p>

                <div className="change__block-footer">
                    <a className="btn btn-white" onClick={this.onClickReturnToStepTwo}> {t('returnBackBtn')} </a>
                    <a className={`btn btn-primary${((this.props.exchangeValues.sendCurrency.type === 'fiat' && this.state.screenshot) || (this.props.exchangeValues.sendCurrency.type === 'crypto' && this.state.paymentProof)) ? '' : ' disable'}`} onClick={this.onClickAccept}> {t('acceptBtn')} </a>
                    <div className="gotoPaymAgree">
                    {t('pressthebtn')}<a href="/" target="_blank"> {t('exchangerules')} </a>
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
        wallets: selectAppConfig(state),
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

export default connect(mapStateToProps, mapDispatchToProps) (withTranslation() (ExchangeToCrypto));