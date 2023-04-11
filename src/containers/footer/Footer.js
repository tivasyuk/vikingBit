import React from 'react';
import logo from "../../img/logo.png"
import {Link} from "react-scroll";

import './footer.scss';
import {PAGES} from "../../constants/Constants";

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="footer-main">
                    <div className="footer-logo">
                        <a onClick={() => props.setActivePage(PAGES.PAGE_MAIN)}><img src={logo} alt="logo"/></a>
                    </div>
                    <p className="copyright">Copyright © 2023 VikingBit. </p>
                </div>

                <div className="footerMenu">
                    <div className="footerMenuBlock">
                        <a onClick={() => props.setActivePage(PAGES.PAGE_RULES)}>Terms of service</a>
                        <a onClick={() => props.setActivePage(PAGES.PAGE_POLICY)}>Privacy policy</a>
                    </div>

                    <div className="footerMenuBlock">
                        <Link
                            to="reviews"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Reviews</Link>
                        <a href="https://t.me/VikingBitBot" target="_blank">We are in Telegram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;