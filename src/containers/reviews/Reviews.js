import React from 'react';
import {connect} from 'react-redux';

import './reviews.scss';
import mainPageApp from "../../img/main-page-app.png";

class Reviews extends React.Component {
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
        return (<div className="main-page-reviews">
            <div className="title-block">
                <h2 className="title">Reviews about us</h2>
                <div className="right">
                    <a href="#" className="btn">View all reviews</a>
                    <a href="#" className="btn btn-white popup-modal">Write a review</a>
                </div>
            </div>

            <div className="review-items">
                <div className="col">
                    <div className="item bg-opacity">
                        <div className="item-top">
                            <h4>Ирина</h4>
                            <div className="revRait review-rating rait-0-stars">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                            </div>
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
                            <div className="revRait review-rating rait-0-stars">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                            </div>
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
                            <div className="revRait review-rating rait-0-stars">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                            </div>
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
                            <div className="revRait review-rating rait-0-stars">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0002 17.75L5.82816 20.995L7.00716 14.122L2.01416 9.255L8.91416 8.253L12.0002 2L15.0862 8.253L21.9862 9.255L16.9932 14.122L18.1722 20.995L12.0002 17.75Z"
                                        fill="#FF006B"></path>
                                </svg>
                            </div>
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);