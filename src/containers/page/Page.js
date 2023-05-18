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
import Cabinet from "../cabinetPage/Cabinet";
import Policy from "../policyPage/Policy";
import Rules from "../rulesPage/Rules";
import {isShowLoading, selectActivePage, selectAddReviewPopup, selectAppConfig} from "../../redux/modules/state/selectors";
import AddReviewPopup from "../addReviewPopup/AddReviewPopup";
import {getCurrencyList, getAppConfig} from "../../redux/modules/state/actions";
import Banner from "../banner/Banner";
import { Route,  Routes  } from 'react-router-dom';
import OrderScreen from '../mainPage/exchangeCount/main/orderScreen/orderScreen';
import Preloader from "../preloader/Preloader";
import ExchangeHistory from "../cabinetPage/ExchangeHistory";

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
        this.props.onGetCurrencyList();
        this.props.onGetAppConfig();
    }

    currentPage = () => {
        return(
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route path="/terms" element={<Rules/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/order" element={<OrderScreen/>}/>
                <Route element={<Cabinet/>}/>
                <Route element={<ExchangeHistory/>}/>
            </Routes>
        )
    }

    render() {
        return (
        <div className="page">
            <Header/>
            <Banner/>
            {this.currentPage()}
            <Footer/>
            {this.props.signInPopup && <SignInPopup/>}
            {this.props.registrationPopup && <RegistrationPopup/>}
            {this.props.forgotPasswordPopup && <ForgotPasswordPopup/>}
            {this.props.addReviewPopup && <AddReviewPopup/>}

            {this.props.loading && <Preloader/>}
        </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        signInPopup: selectSignInPopup(state),
        registrationPopup: selectRegistrationPopup(state),
        forgotPasswordPopup: selectForgotPasswordPopup(state),
        addReviewPopup: selectAddReviewPopup(state),
        activePage: selectActivePage(state),
        loading: isShowLoading(state),
        appConfig: selectAppConfig(state)
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrencyList: () => {
            dispatch(getCurrencyList());
        },
        onGetAppConfig: () => {
            dispatch(getAppConfig());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);