import React from 'react';
import {connect} from 'react-redux';

import './content.scss';
import ExchangeCount from "../exchangeCount/ExchangeCount";
import Steps from "../steps/Steps";
import Telegram from "../telegram/Telegram";
import Reviews from "../reviews/Reviews";

class Content extends React.Component {
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
        return (<div className="main-content">
            <div className="container">
                <ExchangeCount/>
                <Steps/>
                <Reviews/>
                <Telegram/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);