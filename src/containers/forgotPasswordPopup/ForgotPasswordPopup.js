import React from 'react';
import {connect} from 'react-redux';

import '../page/popup.scss';
import {setForgotPasswordPopupState, setSignInPopupState} from "../../redux/modules/login/actions";

class ForgotPasswordPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password2: '',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
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

    onClickResetPassword = () => {

    }

    onClickSignIn = () => {
        this.props.closeForgotPasswordPopup();
        this.props.openSignInPopup();
    }

    onClickClose = () => {
        this.props.closeForgotPasswordPopup();
    }

    render() {
        return (<div className="">
            <div className="mfp-bg mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1">
                <div className="mfp-container mfp-s-ready mfp-inline-holder">
                    <div className="mfp-content">
                        <div className="modal password-reset-modal" id="password-reset-modal">
                            <div className="modal-wrapper">
                                <h2 className="modal-title">Password recovery</h2>
                                <div id="resetPassword">
                                    <div className="input-group">
                                        <input className="form-control f-input"
                                               placeholder='Email'
                                               onChange={e => {
                                                   this.updateEmail(e.target.value)
                                               }}
                                               value={this.state.email}
                                        />
                                    </div>

                                    <div className="input-group">
                                        <input className="form-control f-input"
                                               placeholder='New password'
                                               onChange={e => {
                                                   this.updatePassword(e.target.value)
                                               }}
                                               value={this.state.password}
                                               type="password"
                                        />
                                    </div>

                                    <div className="input-group">
                                        <input className="form-control f-input"
                                               placeholder='New password again'
                                               onChange={e => {
                                                   this.updatePassword2(e.target.value)
                                               }}
                                               value={this.state.password2}
                                               type="password"
                                        />
                                    </div>

                                    <div className="form-bottom">
                                        <a id="restore-btn" className="btn" onClick={this.onClickResetPassword}>Reset
                                            the password</a>
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
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {
        closeForgotPasswordPopup: () => {
            dispatch(setForgotPasswordPopupState(false));
        },
        openSignInPopup: () => {
            dispatch(setSignInPopupState(true));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPopup);