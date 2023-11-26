import React from "react";
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

const OtherTransfers = ({t}) => {
    return (<div className="content">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">{t('currencyReserves')}</h1>
                </div>
                <div className="content-wrapper bg-opacity">
                <p>{t('descriptionAboutOtherTransferDetails')}</p>
                    <ul>
                        <li>{t('descriptionAboutOtherTransferExchange')}</li>
                        <li>{t('descriptionAboutOtherTransferJewerly')}</li>
                        <li>{t('descriptionAboutOtherTransferSellCash')}</li>
                    </ul>
                <p>{t('descriptionAboutNonCashTransferDetails')}  <a href="https://t.me/vikingbit888">t.me/vikingbit888</a></p>
                </div>
            </div>
        </div>
    );
};

export default connect(null, null)(withTranslation()(OtherTransfers));