import React from 'react';
import './steps.scss';
import image from "../../../img/main-page-app.png";
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';

const Steps = (props) => {
    const { t } = props;
    return (
        <div className="main-page-steps">
            <div className="left">
                <img src={image} alt=""/>
            </div>
            <div className="right">
                <h2 className="title">{t('howMakeExch')}</h2>
                <div className="right-steps">
                    <div className="item">
                        <div className="item-info uppercase">{t('stepOne')}</div>
                        <p>{t('chooseCryptocurr')}<br/> {t('andAmount')}</p>
                    </div>
                    <div className="item">
                        <div className="item-info uppercase">{t('stepsTwo')}</div>
                        <p>{t('entertherecipients')}</p>
                    </div>
                    <div className="item">
                        <div className="item-info uppercase">{t('stepsThree')}</div>
                        <p>{t('sendtoken')}</p>
                    </div>
                    <div className="item">
                        <div className="item-info uppercase">{t('stepsFour')}</div>
                        <p>{t('getyourcurrency')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, null)(withTranslation()(Steps));