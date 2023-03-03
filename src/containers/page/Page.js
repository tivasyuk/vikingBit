import React from 'react';
import {connect} from 'react-redux';

import './page.scss';
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import SignInPopup from "../signinPopup/SignInPopup";
import {
    selectForgotPasswordPopup,
    selectRegistrationPopup,
    selectSignInPopup
} from "../../redux/modules/login/selectors";
import RegistrationPopup from "../registrationPopup/RegistrationPopup";
import ForgotPasswordPopup from "../forgotPasswordPopup/ForgotPasswordPopup";

class Page extends React.Component {
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
        return (<div className="page">
            <Header/>
            <Content/>
            <Footer/>

            {this.props.signInPopup && <SignInPopup/>}
            {this.props.registrationPopup && <RegistrationPopup/>}
            {this.props.forgotPasswordPopup && <ForgotPasswordPopup/>}
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {
        signInPopup: selectSignInPopup(state),
        registrationPopup: selectRegistrationPopup(state),
        forgotPasswordPopup: selectForgotPasswordPopup(state),
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);