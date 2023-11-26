import React from 'react';
import './telegram.scss';
import tg from "../../../img/telegram-image.png";
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';

const Telegram = (props) => {
    const { t } = props;
    return (
        <div className="main-page-telegram-bot">
            <div className="left">
                <h2 className="title">{t('exchangecryptocurr')}</h2>
                <div className="left-content">
                    <p>{t('inthemodernworld')}<br/><br/>{t('theobviousadvantages')}</p>
                    <p>{t('detailsToTelegram')} <a href='https://t.me/vikingbit888'><strong>t.me/vikingbit888</strong></a></p>
                </div>
                <div className="left-bottom">
                    <a href="https://t.me/VikingBitBot" className="btn">
                        <span>{t('startchatbtn')}</span>
                    </a>
                </div>
            </div>
            <div className="right">
                <img src={tg} alt="tg"/>
            </div>
        </div>
    );
}

export default connect(null, null)(withTranslation()(Telegram));