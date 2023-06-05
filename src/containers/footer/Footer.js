import React from 'react';
import logo from "../../img/logo.png"
import {Link} from "react-scroll";
import { useTranslation } from "react-i18next";

import './footer.scss';

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
                        {/*<Link*/}
                        {/*    to="reviews"*/}
                        {/*    spy={true}*/}
                        {/*    smooth={true}*/}
                        {/*    offset={-70}*/}
                        {/*    duration={500}*/}
                        {/*>Reviews</Link>*/}
                        <a href="https://t.me/VikingBitBot" target="_blank">{t('inTelegram')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;