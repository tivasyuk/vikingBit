import React from 'react';
import {connect} from 'react-redux';
import logo from "../../img/logo.png"

import './footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (<footer>
            <div className="container">
                <div className="footer-main">
                    <div className="footer-logo">
                        <a href="/"><img src={ logo } alt="logo" /></a>
                    </div>
                    <p className="copyright">Copyright © 2023 VikingBit. </p>
                </div>

                <div className="footerMenu">
                    <div className="footerMenuBlock">
                        <a href="#">AML</a>
                        <a href="#">Frequent question</a>
                        <a href="#">Terms of service</a>
                    </div>

                    <div className="footerMenuBlock">
                        <a href="#">Reliability Guarantees</a>
                        <a href="#">Affiliate program</a>
                        <a href="#">Privacy policy</a>
                    </div>

                    <div className="footerMenuBlock">
                        <a href="#">Reviews</a>
                        <a href="https://t.me/unrealNyahaBot" target="_blank">We are in Telegram</a>
                    </div>
                </div>

            </div>
        </footer>);
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);