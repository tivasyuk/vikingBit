import React from 'react';
import {connect} from 'react-redux';

import './reviews.scss';
import StarRatingStatic from "../../../components/starRating/StarRatingStatic";
import {setSignInPopupState} from "../../../redux/modules/login/actions";
import {setAddReviewPopupState} from "../../../redux/modules/state/actions";

class Reviews extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onWriteReview = () => {
        this.props.openAddReviewPopup();
    }

    render() {
        return (<div className="main-page-reviews" id="reviews">
            <div className="title-block">
                <h2 className="title">Reviews about us</h2>

                <div className="right">
                    <a href="#" className="btn">View all reviews</a>
                    <a className="btn btn-white popup-modal" onClick={this.onWriteReview}>Write a review</a>
                </div>
            </div>

            <div className="review-items">
                <div className="col">
                    <div className="item bg-opacity">
                        <div className="item-top">
                            <h4>Ирина</h4>
                            <StarRatingStatic starsCount={5}/>
                        </div>
                        <div className="item-content">
                            <p>The exchange was successful. Faster than I thought. Thank you for efficiency. I
                                recommend.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item bg-opacity">
                        <div className="item-top">
                            <h4>Ольга</h4>
                            <StarRatingStatic starsCount={4}/>
                        </div>
                        <div className="item-content">
                            <p>Quality service, change, you will not regret</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item bg-opacity">
                        <div className="item-top">
                            <h4>Володимир</h4>
                            <StarRatingStatic starsCount={5}/>
                        </div>
                        <div className="item-content">
                            <p>I sold crypto for dollars without any problems</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item bg-opacity">
                        <div className="item-top">
                            <h4>Марат</h4>
                            <StarRatingStatic starsCount={5}/>
                        </div>
                        <div className="item-content">
                            <p>Good exchanger. I filled out the application quickly, the site works flawlessly, I
                                received everything that was supposed to come.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-reviews-bottom">
                <a href="#" className="btn">View all reviews</a>
                <a href="#" className="btn btn-white popup-modal">Write a review</a>
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {
        openAddReviewPopup: () => {
            dispatch(setAddReviewPopupState(true));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);