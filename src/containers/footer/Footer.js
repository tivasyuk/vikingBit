import React from 'react';
import logo from "../../img/logo.png"
import {Link} from "react-scroll";

import './footer.scss';

const Footer = (props) => {
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
                        <a href='/terms'>Terms of service</a>
                        <a href='/policy'>Privacy policy</a>
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