import React from 'react';
import {connect} from 'react-redux';

import './exchangeCount.scss';
import LeftSideExchange from "./step1/leftSideExchange/LeftSideExchange";
import RightSideExchange from "./step1/rightSideExchange/RightSideExchange";
import Step2Exchange from "./step2/Step2Exchange";
import Step2ExchangeCash from "./step2/Step2ExchangeCash";

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

    changeStepToSecond = (step) => {
        this.setState({step: step});
    }

    changeStepToThird = (step) => {
        this.setState({step: step});
    }

    getType = (type) => {
        this.setState({getAmountType: type});
    }

    render() {
        return (<div className={`main exchangeCont home-change step${this.state.step}`} id="home-exchange">
            <LeftSideExchange/>
            <RightSideExchange changeStep={this.changeStepToSecond} getType={this.getType}/>
            {this.state.step === 2 && this.state.getAmountType !== 'cash' && <Step2Exchange changeStep={this.changeStepToThird}/>}
            {this.state.step === 2 && this.state.getAmountType === 'cash' && <Step2ExchangeCash changeStep={this.changeStepToThird}/>}
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