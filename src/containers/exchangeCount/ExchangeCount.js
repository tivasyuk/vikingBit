import React from 'react';
import {connect} from 'react-redux';

import './exchangeCount.scss';
import LeftSideExchange from "./step1/leftSideExchange/LeftSideExchange";
import RightSideExchange from "./step1/rightSideExchange/RightSideExchange";
import Step2Exchange from "./step2/Step2Exchange";

class ExchangeCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onChangeStep = (step) => {
        this.setState({step: step});
    }

    render() {
        return (<div className={`main exchangeCont home-change step${this.state.step}`} id="home-exchange">
            <LeftSideExchange/>
            <RightSideExchange onChangeStep={this.onChangeStep}/>
            {this.state.step === 2 && <Step2Exchange onChangeStep={this.onChangeStep}/>}
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