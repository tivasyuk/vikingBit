import React from 'react';
import {connect} from 'react-redux';

import './exchangeCount.scss';
import LeftSideExchange from "./main/leftSideExchange/LeftSideExchange";
import RightSideExchange from "./main/rightSideExchange/RightSideExchange";
import ExchangeToCash from "./stepExchange/ExchangeToCash";
import ExchangeToCard from "./stepExchange/ExchangeToCard";
import ExchangeToCrypto from "./stepExchange/ExchangeToCrypto";
import { selectExchangeScreenState, selectOrderData } from '../../../redux/modules/exchange/selectors';

class ExchangeCount extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (<div className={`main exchangeCont home-change step${this.props.screenState.screenStep}`} id="home-exchange">
            {this.props.screenState.screenStep <= 2 && this.props.screenState.screenStep < 4 && <LeftSideExchange/> }
            {this.props.screenState.screenStep <= 2 && this.props.screenState.screenStep < 4 && <RightSideExchange />}
            {this.props.screenState.screenStep >= 2 && this.props.screenState.screenStep < 4 && this.props.screenState.exchangeType === 'toCash' && <ExchangeToCash />}
            {this.props.screenState.screenStep >= 2 && this.props.screenState.screenStep < 4 && this.props.screenState.exchangeType === 'toCard' && <ExchangeToCard />}
            {this.props.screenState.screenStep >= 2 && this.props.screenState.screenStep < 4 && this.props.screenState.exchangeType === 'toCrypto' && <ExchangeToCrypto/>}
        </div>);
    }
}

export const mapStateToProps = (state) => {
        return {
            screenState: selectExchangeScreenState(state),
            orderData: selectOrderData(state)
        }
    }
;

export const mapDispatchToProps = (dispatch) => {
        return {}
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCount);