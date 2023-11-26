import React from "react";
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

const CashTransfer = ({t}) => {
    return (<div className="content">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">{t('cashTransfers')}</h1>
                </div>
                <div className="content-wrapper bg-opacity">
                    <p>{t('vikingBitDescr')}</p>
                    <p>{t('descrAboutTransfer')}</p>
                    <p> {t('descrAboutPropose')}
                    <a href="https://t.me/vikingbit888"><strong> t.me/vikingbit888</strong></a> </p>
                    <p>{t('descriptionAboutCashTransfer')}</p>
                    <ul>
                        <li>{t('descriptionAboutCurrencySelect')}</li>
                        <li>{t('descriptionAboutBankAccount')}</li>
                        <li>{t('descriptionAboutSpeed')}</li>
                        <li>{t('descriptionAboutTax')}</li>
                    </ul>
                    <p>{t('descriptionAboutDetails')} {t('descriptionAboutOr')} <a href="https://t.me/lannister999"><strong>t.me/lannister999</strong></a></p>
                </div>
            </div>
        </div>
    );
};

export default connect(null, null)(withTranslation()(CashTransfer));