import React from 'react';
import {connect} from 'react-redux';
import logo from "../../img/logo.png"
import {Link} from "react-scroll";

import './footer.scss';
import {setActivePage} from "../../redux/modules/state/actions";
import Constants from "../../constants/Constants";

const Footer = () => {
        return (<footer>
            <div className="container">
                <div className="footer-main">
                    <div className="footer-logo">
                        <a onClick={() => this.props.setActivePage(Constants.PAGE_MAIN)}><img src={ logo } alt="logo" /></a>
                    </div>
                    <p className="copyright">Copyright © 2023 VikingBit. </p>
                </div>

                <div className="footerMenu">
                    <div className="footerMenuBlock">
                        <a href="#">AML</a>
                        <a onClick={() => this.props.setActivePage(Constants.PAGE_RULES)}>Terms of service</a>
                    </div>

                    <div className="footerMenuBlock">
                        <a href="#">Reliability Guarantees</a>
                        <a onClick={() => this.props.setActivePage(Constants.PAGE_POLICY)}>Privacy policy</a>
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

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setActivePage: (value) => {
            dispatch(setActivePage(value));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);