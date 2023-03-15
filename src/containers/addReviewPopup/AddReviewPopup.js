import React from 'react';
import {connect} from 'react-redux';

import '../page/popup.scss';
import {
    setForgotPasswordPopupState,
    setRegistrationPopupState, setSignInData,
    setSignInPopupState
} from "../../redux/modules/login/actions";
import GoogleAuth from "../../components/googleAuth/GoogleAuth";
import {setAddReviewPopupState} from "../../redux/modules/state/actions";
import StarRating from "../../components/starRating/StarRating";

class AddReviewPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            text: '',
            rating: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name !== nextState.name) return true;
        if(this.state.text !== nextState.text) return true;
        if(this.state.rating !== nextState.rating) return true;

        return false;
    }

    onChooseRating = (rating) => {
        this.setState({rating});
    }

    onClickClose = () => {
        this.props.closeAddReviewPopup();
    }

    onClickSend = () => {
        // send review data
        console.log("REVIEW POPUP SEND DATA:\nname:", this.state.name, "\nrating:", this.state.rating, "stars\ntext:", this.state.text);
        this.props.closeAddReviewPopup();
    }

    updateName = (val) => {
        this.setState({name: val})
    }

    updateText = (val) => {
        this.setState({text: val})
    }

    render() {
        return (<div className="">
            <div className="mfp-bg mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1">
                <div className="mfp-container mfp-inline-holder">
                    <div className="mfp-content">
                        <div className="modal live-review-modal" id="liveRevModal">
                            <div className="modal-wrapper">
                                <h2 className="modal-title">Leave your review</h2>
                                <div id="liveRevForm">

                                    <div className="reviews__block-stars">
                                        <div className="rating__group">
                                            <StarRating onChooseRating={this.onChooseRating}/>
                                        </div>
                                    </div>
                                    <br/>
                                        <div className="input-group">
                                            <label>Your name</label>
                                            <input className="form-control f-input"
                                                   placeholder='Enter your name'
                                                   onChange={e => { this.updateName(e.target.value) }}
                                                   value={this.state.name}
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label>Your feedback</label>
                                            <textarea className="form-control f-input"
                                                placeholder='Enter the review text'
                                                onChange={e => { this.updateText(e.target.value, 120) }}
                                                value={this.state.text}
                                                cols="30"
                                                rows="10"
                                            />
                                        </div>

                                        <div className="form-bottom text-center">
                                            <a className="btn" id="new_rev" onClick={this.onClickSend}>Send</a>
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
        closeAddReviewPopup: () => {
            dispatch(setAddReviewPopupState(false));
        },
        sendReviewData: (data) => {
            // dispatch(setReviewData(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPopup);