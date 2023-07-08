import React from 'react';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

import './leftSideExchange.scss';
import mainIcon1 from "../../../../../img/main-icon-1.svg";
import mainIcon2 from "../../../../../img/main-icon-2.svg";
import mainIcon3 from "../../../../../img/main-icon-3.svg";
import {setRegistrationPopupState, setSignInPopupState} from "../../../../../redux/modules/login/actions";
import {selectIsLoggedIn} from "../../../../../redux/modules/login/selectors";

class LeftSideExchange extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onClickSignIn = () => {
        this.props.openSignInPopup();
    }

    onClickRegistration = () => {
        this.props.openRegistrationPopup();
    }

    render() {
        const { t } = this.props;
        return (<div className="main-left s1">
            <h1>{t("digitalcurrencyconvserv")}</h1>
            <div className="main-preim-items">
                <div className="item">
                    <div className="item-icon">
                        <img src={mainIcon1} alt="i1"/>
                    </div>
                    <p>{t("noRegestration")}</p>
                </div>
                <div className="item">
                    <div className="item-icon">
                        <img src={mainIcon2} alt="i2"/>
                    </div>
                    <p>{t("yoursafety")}</p>
                </div>
                <div className="item">
                    <div className="item-icon">
                        <img src={mainIcon3} alt="i3"/>
                    </div>
                    <p>{t("benefitsfrmcooper")}</p>
                </div>
            </div>
            <div className="main-left-bottom">
                {!this.props.isLoggedIn && <a className="btn popup-modal" onClick={this.onClickSignIn}>{t("signIn")}</a>}
                {!this.props.isLoggedIn && <a className="btn btn-white popup-modal" onClick={this.onClickRegistration}>{t("registration")}</a>}
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: selectIsLoggedIn(state),
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)( withTranslation()(LeftSideExchange));