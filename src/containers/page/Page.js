import React from 'react';
import {connect} from 'react-redux';

import './page.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SignInPopup from "../signinPopup/SignInPopup";
import {
    selectForgotPasswordPopup,
    selectRegistrationPopup,
    selectSignInPopup
} from "../../redux/modules/login/selectors";
import RegistrationPopup from "../registrationPopup/RegistrationPopup";
import ForgotPasswordPopup from "../forgotPasswordPopup/ForgotPasswordPopup";
import MainPage from "../mainPage/MainPage";
import Constants from "../../constants/Constants";
import Cabinet from "../cabinetPage/Cabinet";
import Policy from "../policyPage/Policy";
import Rules from "../rulesPage/Rules";
import {selectActivePage, selectAddReviewPopup} from "../../redux/modules/state/selectors";
import AddReviewPopup from "../addReviewPopup/AddReviewPopup";

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.activePage !== prevProps.activePage) {
            window.scrollTo(0,0);
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    currentPage = () => {
        switch (this.props.activePage){
            case Constants.PAGE_MAIN:
                return <MainPage/>
            case Constants.PAGE_RULES:
                return <Rules/>
            case Constants.PAGE_POLICY:
                return <Policy/>
            case Constants.PAGE_CABINET:
                return <Cabinet/>
            default:
                return <MainPage/>;
        }
    }

    render() {
        return (<div className="page">
            <Header/>
            {this.currentPage()}
            <Footer/>

            {this.props.signInPopup && <SignInPopup/>}
            {this.props.registrationPopup && <RegistrationPopup/>}
            {this.props.forgotPasswordPopup && <ForgotPasswordPopup/>}
            {this.props.addReviewPopup && <AddReviewPopup/>}
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {
        signInPopup: selectSignInPopup(state),
        registrationPopup: selectRegistrationPopup(state),
        forgotPasswordPopup: selectForgotPasswordPopup(state),
        addReviewPopup: selectAddReviewPopup(state),
        activePage: selectActivePage(state),
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);