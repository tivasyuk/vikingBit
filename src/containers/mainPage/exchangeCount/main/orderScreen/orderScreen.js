import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import './orderScreen.scss';
import { selectOrderData } from '../../../../../redux/modules/exchange/selectors';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../../../redux/modules/exchange/actions';

const OrderScreen = (props) => {
    const location = useLocation();
    useEffect(() => {
        const id = [...location.search.matchAll(/\?id=(.*)/gm)][0][1]
        props.onGetOrderData(id)
    }, [location])
    return (
        <div className="main-exchange-wrapper bg-opacity s2 cardToCrypto">
                <div className={`f-home-fields step4`}>
                    <h3>Transaction Details</h3>
                    <div className="desc"><span className="desc-label">Transaction ID:</span> #<span>{props.orderData.transactionID}</span></div>
                    <div className="desc"><span className="desc-label">Status:</span> <span className="status status-pending">Processing...</span></div>
                    <div className="desc"><span className="desc-label">Created on:</span> <span>{("" + (new Date(props.orderData.timestamp)).toLocaleString())}</span></div>
                    <div className="desc"><span className="desc-label">Transaction amount:</span> {props.orderData.fromSum?.value} {props.orderData.fromSum?.currency} &#8658; {props.orderData.toSum?.value} {props.orderData.toSum?.currency}</div>
                    <div className="desc"><span className="desc-label">Wallet:</span> {props.orderData.wallet}</div>


                    <div>You will get your money after moderating.</div>

                    <div className="change__block-footer">
                        <a className="btn" href='/'>Return to Main Page</a>
                </div>

                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        orderData: selectOrderData(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetOrderData: (id) => {
            dispatch(getOrderById(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);