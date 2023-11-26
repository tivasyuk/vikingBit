import React from 'react';
import logo from "../../img/logo.png"
import { ReactComponent as TelegramIcon} from "../../components/icons/telegramIcon.svg";
import { ReactComponent as InstagramIcon} from "../../components/icons/instagramIcon.svg";
import { ReactComponent as TikTokIcon} from "../../components/icons/tiktokIcon.svg";
import { ReactComponent as FacebookIcon} from "../../components/icons/facebookIcon.svg";
import { useTranslation } from "react-i18next";

import './footer.scss';

const PATHS_CONFIG = {
    cashTransfers: '/cashTransfers',
    noncashTransfers: '/noncashTransfers',
    other: '/other',
    exchange: '/'
}

const Footer = (props) => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <div className="footer-main">
                    <div className="footer-logo">
                        <a href='/'><img src={logo} alt="logo"/></a>
                    </div>
                    <p className="copyright">Copyright © 2023 VikingBit. </p>
                </div>

                <div className="footerMenu">
                    <div className="footerMenuBlock">
                        <a href='/terms'>{t('terms')}</a>
                        <a href='/policy'>{t('policy')}</a>
                    </div>
                    <div className="footerMenuBlock">
                        <p>{t('ourMail')}: vikingbit23@gmail.com</p>
                        <p>{t('callUs')} +380979999999</p>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <a className="iconBlock" href="https://t.me/VikingBitBot"><TelegramIcon /></a>
                            <a className="iconBlock" href="https://t.me/VikingBitBot"><InstagramIcon /></a>
                            <a className="iconBlock" href="https://t.me/VikingBitBot"><TikTokIcon /></a>
                            <a className="iconBlock" href="https://t.me/VikingBitBot"><FacebookIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;