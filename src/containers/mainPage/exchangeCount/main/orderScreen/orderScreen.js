import React from 'react';
import {connect} from 'react-redux';

import './orderScreen.scss';
import { setScreenState } from '../../../../../redux/modules/exchange/actions';
import { selectExchangeScreenState, selectOrderData } from '../../../../../redux/modules/exchange/selectors';

class OrderScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onClickReturnBack = () => {
        this.props.onScreenStateChange({ screenStep: 1 })
    }

    render() {
        return (
            <div className="main-exchange-wrapper bg-opacity s2 cardToCrypto">
                <div className={`f-home-fields step4`}>
                    <h3>Transaction Details</h3>
                    <div className="desc"><span className="desc-label">Transaction ID:</span> #<span>{this.props.orderData.transactionID}</span></div>
                    <div className="desc"><span className="desc-label">Status:</span> <span className="status status-pending">Processing...</span></div>
                    <div className="desc"><span className="desc-label">Created on:</span> <span>{("" + (new Date(this.props.orderData.transactionDate)).toLocaleString())}</span></div>
                    <div className="desc"><span className="desc-label">Transaction amount:</span> {this.props.orderData.sendAmount} {this.props.orderData.sendCurrency} &#8658; {this.props.orderData.getAmount} {this.props.orderData.getCurrency}</div>
                    <div className="desc"><span className="desc-label">Wallet:</span> {this.props.orderData.wallet}</div>


                    <div>You will get your money after moderating.</div>

                    <div className="change__block-footer">
                        <a className="btn" onClick={this.onClickReturnToStepOne}>Return to Main Page</a>
                </div>

                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        screenState: selectExchangeScreenState(state),
        orderData: selectOrderData(state)
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onScreenStateChange: screenState => {
            dispatch(setScreenState(screenState));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);