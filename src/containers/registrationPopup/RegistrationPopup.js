import React from 'react';
import {connect} from 'react-redux';

import '../page/popup.scss';
import {setRegistrationPopupState, setSignInPopupState} from "../../redux/modules/login/actions";
import Checkbox from "../../components/checkbox/Checkbox";
import GoogleAuth from "../../components/googleAuth/GoogleAuth";

class RegistrationPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkAgree: true,
            checkSubscribe: true,
            email: '',
            password: '',
            password2: '',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onAgreeCheckboxClick = () => {
        this.setState({checkAgree: !this.state.checkAgree})
    }

    onSubscribeCheckboxClick = () => {
        this.setState({checkSubscribe: !this.state.checkSubscribe})
    }

    updateEmail = (val) => {
        this.setState({email: val})
    }

    updatePassword = (val) => {
        this.setState({password: val})
    }

    updatePassword2 = (val) => {
        this.setState({password2: val})
    }

    onClickSignIn = () => {
        this.props.closeRegistrationPopup();
        this.props.openSignInPopup();
    }

    onClickRegistration = () => {

    }

    onClickClose = () => {
        this.props.closeRegistrationPopup();
    }

    render() {
        return (<div className="">
                <div className="mfp-bg mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1">
                    <div className="mfp-container mfp-s-ready mfp-inline-holder">
                        <div className="mfp-content">
                            <div className="modal register-modal" id="register-modal">
                                <div className="modal-wrapper" id="register">
                                    <h2 className="modal-title">Registration</h2>

                                    <GoogleAuth/>

                                    <p>Or sign up using your e-mail address:</p>

                                    <div id="register-form">
                                        <div className="input-group form-group">
                                            <input className="form-control f-input"
                                                   placeholder='Your E-mail'
                                                   onChange={e => {
                                                       this.updateEmail(e.target.value)
                                                   }}
                                                   value={this.state.email}
                                                   type="email"
                                            />
                                        </div>

                                        <div className="input-group form-group">
                                            <input className="form-control f-input"
                                                   placeholder='Enter password'
                                                   onChange={e => {
                                                       this.updatePassword(e.target.value)
                                                   }}
                                                   value={this.state.password}
                                                   type="password"
                                            />
                                        </div>

                                        <div className="input-group form-group">
                                            <input className="form-control f-input"
                                                   placeholder='Enter your password again'
                                                   onChange={e => {
                                                       this.updatePassword2(e.target.value)
                                                   }}
                                                   value={this.state.password2}
                                                   type="password"
                                            />
                                        </div>

                                        <div className="form-check">
                                            <Checkbox
                                                name={`I click the register button and agree to <a href="#" target="_blank">
                                                the rules of the exchange </a>`}
                                                isChecked={this.state.checkAgree}
                                                onClickHandler={this.onAgreeCheckboxClick}
                                            />
                                        </div>

                                        <div className="form-check">
                                            <Checkbox
                                                name={`Receive notifications about promotions and discounts`}
                                                isChecked={this.state.checkSubscribe}
                                                onClickHandler={this.onSubscribeCheckboxClick}
                                            />
                                        </div>
                                        <div className="form-bottom">
                                            <a id="register-btn" className="btn"
                                               onClick={this.onClickRegistration}>Registration</a>
                                            <a className="btn btn-white popup-modal" onClick={this.onClickSignIn}>Sign
                                                in</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mfp-close" onClick={this.onClickClose}>×</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {
        closeRegistrationPopup: () => {
            dispatch(setRegistrationPopupState(false));
        },
        openSignInPopup: () => {
            dispatch(setSignInPopupState(true));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPopup);