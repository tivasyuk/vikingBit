import React from 'react';
import {connect} from 'react-redux';

import './header.scss';
import logo from "../../img/logo.png"
import {setRegistrationPopupState, setSignInPopupState} from "../../redux/modules/login/actions";
import {selectIsLoggedIn, selectUserData} from "../../redux/modules/login/selectors";
import Constants from "../../constants/Constants";
import {setActivePage} from "../../redux/modules/state/actions";

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

    // onClickUserAccount = () => {
    //
    // }

    render() {
        return (<header className="header">
            <div className="container">
                <div className="top">
                    <div className="logo">
                        <a onClick={() => this.props.setActivePage(Constants.PAGE_MAIN)}><img src={ logo } alt="logo" /></a>
                    </div>
                    <ul className="menu">
                        <li className="active"><a onClick={() => this.props.setActivePage(Constants.PAGE_MAIN)}>Exchange</a></li>
                        <li className=""><a href="#">Discounts</a></li>
                        <li className=""><a href="#">Currency reserves</a></li>
                        <li className=""><a href="#">Feedback</a></li>
                    </ul>
                    <div className="top-account">
                        {!this.props.isLoggedIn && <a className="btn popup-modal" onClick={this.onClickSignIn}>Sign in</a>}
                        {!this.props.isLoggedIn && <a className="top-register popup-modal" onClick={this.onClickRegistration}>Registration</a>}
                        {this.props.isLoggedIn && <a className="top-register" onClick={() => this.props.setActivePage(Constants.PAGE_CABINET)}>{this.props.userData.email}</a>}
                    </div>
                </div>
            </div>
        </header>);
    }
}

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: selectIsLoggedIn(state),
        userData: selectUserData(state)
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        openSignInPopup: () => {
            dispatch(setSignInPopupState(true));
        },
        openRegistrationPopup: () => {
            dispatch(setRegistrationPopupState(true));
        },
        setActivePage: (value) => {
            dispatch(setActivePage(value));
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);