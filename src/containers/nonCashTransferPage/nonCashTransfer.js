import React from "react";
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

const NonCashTransfer = ({t}) => {
    return (<div className="content">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">{t('noncashTransfers')}</h1>
                </div>
                <div className="content-wrapper bg-opacity">
                <p>{t('descriptionAboutNonCashTransferMainRules')}</p>
                    <ul>
                        <li>{t('descriptionAboutNonCashTransferSwift')}</li>
                        <li>{t('descriptionAboutNonCashTransferChina')}</li>
                        <li>{t('descriptionAboutNonCashTransferInvoice')}</li>
                        <li>{t('descriptionAboutNonCashTransferOther')}</li>
                    </ul>
                <p>{t('descriptionAboutNonCashTransferDetails')}  <a href="https://t.me/vikingbit888">t.me/vikingbit888</a></p>
                </div>
            </div>
        </div>
    );
};

export default connect(null, null)(withTranslation()(NonCashTransfer));