import React from 'react';
import {connect} from 'react-redux';

import './header.scss';
import logo from "../../img/logo.png"
import {setRegistrationPopupState, setSignInPopupState} from "../../redux/modules/login/actions";
import {selectIsLoggedIn, selectUserData} from "../../redux/modules/login/selectors";
import {withTranslation} from 'react-i18next';
import LanguageFlags from "../../components/languageFlags/LanguageFlags";

const PATHS_CONFIG = {
    cashTransfers: '/cashTransfers',
    noncashTransfers: '/noncashTransfers',
    other: '/other',
    exchange: '/'
}

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

    onClickDiscounts = () => {

    }

    onClickCurrencyReserves = () => {

    }

    onClickFeedback = () => {

    }

    render() {
        const params = window.location;
        const { t } = this.props;
        return (<header className="header">
            <div className="container">
                <div className="top">
                    <div className="logo">
                        <a href='/'><img src={ logo } alt="logo" /></a>
                    </div>
                    <ul className="menu">
                        <li className={PATHS_CONFIG.exchange === params.pathname ? 'active' : ''}><a href={PATHS_CONFIG.exchange}>{t('exchange')}</a></li>
                        <li className={PATHS_CONFIG.cashTransfers === params.pathname ? 'active' : ''}><a href={PATHS_CONFIG.cashTransfers}>{t('cashTransfers')}</a></li>
                        <li className={PATHS_CONFIG.noncashTransfers === params.pathname ? 'active' : ''}><a href={PATHS_CONFIG.noncashTransfers}>{t('noncashTransfers')}</a></li>
                        <li className={PATHS_CONFIG.other === params.pathname ? 'active' : ''}><a href={PATHS_CONFIG.other}>{t('currencyReserves')}</a></li>
                        {/* <li className=""><a href='/feedback'>Feedback</a></li> */}
                    </ul>
                    {/* <div className="top-account">
                        {!this.props.isLoggedIn && <a className="btn popup-modal" onClick={this.onClickSignIn}>{t('signIn')}</a>}
                        {!this.props.isLoggedIn && <a className="top-register popup-modal" onClick={this.onClickRegistration}>{t('registration')}</a>}
                        {this.props.isLoggedIn && <a className="top-register" href='/user'>{this.props.userData.email}</a>}
                    </div> */}
                    <LanguageFlags/>
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Header));