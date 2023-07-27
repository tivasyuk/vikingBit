import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import './orderScreen.scss';
import { selectOrderData } from '../../../../../redux/modules/exchange/selectors';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../../../redux/modules/exchange/actions';
import {withTranslation} from 'react-i18next'; 

const statusText = {
    pending: "Processing...",
    confirm: "Success!",
    reject: "Canceled",
}

const OrderScreen = (props) => {
    const { t } = props;
    const location = useLocation();
    useEffect(() => {
        const id = [...location.search.matchAll(/\?id=(.*)/gm)][0][1]
        props.onGetOrderData(id)
    }, [location])
    return (
        <div className="main-content">
            <div className="container">
                <div className="main-exchange-wrapper bg-opacity s2 cardToCrypto">
                    <div className={`f-home-fields step4`}>
                        <h3> {t('transactiondetails')}</h3>
                        <div className="desc"><span className="desc-label">{t('transactionId')} :</span> #<span>{props.orderData.transactionID}</span></div>
                        <div className="desc"><span className="desc-label">{t('status')} :</span> <span className={`status status-${props.orderData.status}`}>{statusText[props.orderData.status]}</span></div>
                        <div className="desc"><span className="desc-label"> {t('createdOn')}:</span> <span>{("" + (new Date(props.orderData.timestamp)).toLocaleString())}</span></div>
                        <div className="desc"><span className="desc-label"> {t('transactionamount')} :</span> {props.orderData.fromSum?.value} {props.orderData.fromSum?.currency} &#8658; {props.orderData.toSum?.value} {props.orderData.toSum?.currency}</div>
                        <div className="desc"><span className="desc-label"> {t('wallet')} :</span> {props.orderData.wallet}</div>


                        <div> {t('uwillgetmoney')} </div>

                        <div className="change__block-footer">
                            <a className="btn" href='/'> {t('returnToMainPage')} </a>
                        </div>

                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (withTranslation() (OrderScreen));