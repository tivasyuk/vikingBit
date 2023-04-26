import React from 'react';
import {connect} from 'react-redux';

import './stepExchange.scss';
import { setScreenState } from '../../../../redux/modules/exchange/actions';

class ExchangeToCash extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onClickReturnBack = () => {
        this.props.onScreenStateChange({ screenStep: 1 })
    }

    render() {
        return (<div className="main-exchange-wrapper bg-opacity s2">
            <h1>Digital currency conversion service</h1>
            <div id="props" className="f-home-fields">
                <p>Contact our manager in Telegram to exchange your money to cash</p>
                <br className={"clear"}/>
            </div>

            <div className="change__block-footer">
                <a className="btn btn-white" onClick={this.onClickReturnBack}>Return back</a>
                <a href="https://t.me/VikingBitBot" target="_blank" className="btn">
                    <span>Contact our manager</span>
                </a>
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onScreenStateChange: screenState => {
            dispatch(setScreenState(screenState));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeToCash);