import React from 'react';
import {connect} from 'react-redux';

import './exchangeCount.scss';
import LeftSideExchange from "./main/leftSideExchange/LeftSideExchange";
import RightSideExchange from "./main/rightSideExchange/RightSideExchange";
import ExchangeToCash from "./stepExchange/ExchangeToCash";
import ExchangeToCard from "./stepExchange/ExchangeToCard";
import ExchangeToCrypto from "./stepExchange/ExchangeToCrypto";

class ExchangeCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            getAmountType: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    changeStep = (step) => {
        this.setState({step: step});
    }

    getType = (type) => {
        this.setState({getAmountType: type});
    }

    render() {
        return (<div className={`main exchangeCont home-change step${this.state.step}`} id="home-exchange">
            <LeftSideExchange/>
            <RightSideExchange changeStep={this.changeStep} getType={this.getType}/>
            {this.state.step === 2 && this.state.getAmountType === 'toCash' && <ExchangeToCash changeStep={this.changeStep}/>}
            {this.state.step === 2 && this.state.getAmountType === 'toCard' && <ExchangeToCard changeStep={this.changeStep}/>}
            {this.state.step === 2 && this.state.getAmountType === 'toCrypto' && <ExchangeToCrypto changeStep={this.changeStep}/>}
        </div>);
    }
}

export const mapStateToProps = (state) => {
        return {}
    }
;

export const mapDispatchToProps = (dispatch) => {
        return {}
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCount);