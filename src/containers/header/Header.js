import React from 'react';
import {connect} from 'react-redux';

import './header.scss';
import logo from "../../img/logo.png"
import {setRegistrationPopupState, setSignInPopupState} from "../../redux/modules/login/actions";

class Header extends React.Component {
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

    onClickSignIn = () => {
        this.props.openSignInPopup();
    }

    onClickRegistration = () => {
        this.props.openRegistrationPopup();
    }

    render() {
        return (<header className="header">
            <div className="container">
                <div className="top">
                    <div className="logo">
                        <a href="/"><img src={ logo } alt="logo" /></a>
                    </div>
                    <ul className="menu">
                        <li className="active"><a href="/">Exchange</a></li>
                        <li className=""><a href="#">Discounts</a></li>
                        <li className=""><a href="#">Currency reserves</a></li>
                        <li className=""><a href="#">FAQ</a></li>
                        <li className=""><a href="#">Feedback</a></li>
                    </ul>
                    <div className="top-account">
                        <a className="btn popup-modal" onClick={this.onClickSignIn}>Sign in</a>
                        <a className="top-register popup-modal" onClick={this.onClickRegistration}>Registration</a>
                    </div>
                </div>
            </div>
        </header>);
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {
        openSignInPopup: () => {
            dispatch(setSignInPopupState(true));
        },
        openRegistrationPopup: () => {
            dispatch(setRegistrationPopupState(true));
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);