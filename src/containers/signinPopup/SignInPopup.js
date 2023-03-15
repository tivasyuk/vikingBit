import React from 'react';
import {connect} from 'react-redux';

import '../page/popup.scss';
import {
    setForgotPasswordPopupState,
    setRegistrationPopupState, setSignInData,
    setSignInPopupState
} from "../../redux/modules/login/actions";
import GoogleAuth from "../../components/googleAuth/GoogleAuth";

class SignInPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.email !== nextState.email) return true;
        if(this.state.password !== nextState.password) return true;

        return false;
    }

    onClickSignIn = () => {
        this.props.setSignInData(this.state.email, this.state.password);
        this.props.closeSignInPopup();
    }

    onClickRegistration = () => {
        this.props.closeSignInPopup();
        this.props.openRegistrationPopup();
    }

    onClickForgotPassword = () => {
        this.props.closeSignInPopup();
        this.props.openForgotPasswordPopup();
    }

    onClickClose = () => {
        this.props.closeSignInPopup();
    }

    updateEmail = (val) => {
        this.setState({email: val})
    }

    updatePassword = (val) => {
        this.setState({password: val})
    }

    render() {
        return (<div className="">
            <div className="mfp-bg mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1">
                <div className="mfp-container mfp-inline-holder">
                    <div className="mfp-content">
                        <div className="modal vr-modal login-modal" id="login-modal">
                            <div className="modal-wrapper" id="signin">
                                <h2 className="modal-title">Enter the site</h2>

                                <GoogleAuth/>

                                <p>or</p>

                                <div id="auth-form">
                                    <div className="input-group form-group">
                                        <input className="form-control f-input"
                                               placeholder='Enter your email address'
                                               onChange={e => { this.updateEmail(e.target.value) }}
                                               value={this.state.email}
                                        />
                                    </div>
                                    <div className="input-group form-group">
                                        <input className="form-control f-input"
                                               placeholder='Enter password'
                                               onChange={e => { this.updatePassword(e.target.value) }}
                                               value={this.state.password}
                                               type="password"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <a className="popup-modal" onClick={this.onClickForgotPassword}>Forgot your password?</a>
                                    </div>
                                    <div className="form-bottom">
                                        <a className="btn" id="auth-form-btn" onClick={this.onClickSignIn}>Sign in</a>
                                        <a className="btn btn-white popup-modal" onClick={this.onClickRegistration}>Registration</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mfp-close" onClick={this.onClickClose}>×</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {
        closeSignInPopup: () => {
            dispatch(setSignInPopupState(false));
        },
        openRegistrationPopup: () => {
            dispatch(setRegistrationPopupState(true));
        },
        openForgotPasswordPopup: () => {
            dispatch(setForgotPasswordPopupState(true));
        },
        setSignInData: (email, password) => {
            dispatch(setSignInData(true, email, password));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPopup);