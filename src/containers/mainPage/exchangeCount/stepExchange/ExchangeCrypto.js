import React from 'react';
import {connect} from 'react-redux';

import './stepExchange.scss';

class ExchangeCardToCrypto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            wallet: '',
            coupon: '',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onClickReturnBack = () => {
        this.props.changeStep(1)
    }

    updateLogin = (val) => {
        this.setState({login: val})
    }

    updateWallet = (val) => {
        this.setState({wallet: val})
    }

    updateCoupon = (val) => {
        this.setState({coupon: val})
    }

    render() {
        return (<div className="main-exchange-wrapper bg-opacity s2">
            <h1>Digital currency conversion service</h1>
            <div id="props" className="f-home-fields">
                <div className="col-md-6 col-xl-4 ff-removable">
                    <div className="form-group mb-4">
                        <label>E-mail or Telegram</label>
                        <div className="form-field">
                            <input className="form-control f-input"
                                   placeholder='login@yahoo.com | @login'
                                   onChange={e => {
                                       this.updateLogin(e.target.value)
                                   }}
                                   value={this.state.login}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4 ff-removable">
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

                <div className="col-md-6 col-xl-4 ff-removable">
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
                <br className={"clear"}/>
            </div>

            <div className="change__block-footer">
                <a className="btn btn-white" onClick={this.onClickReturnBack}>Return back</a>
                <a className="btn btn-primary">Start an exchange</a>
                <div className="gotoPaymAgree">
                    Press the button "Start an exchange", you agree with <a href="/" target="_blank">exchange rules</a>
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
        return {
        }
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCardToCrypto);