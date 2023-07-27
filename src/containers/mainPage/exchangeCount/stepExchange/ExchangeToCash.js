import React from 'react';
import {connect} from 'react-redux';

import './stepExchange.scss';
import { setScreenState } from '../../../../redux/modules/exchange/actions';
import {withTranslation} from 'react-i18next'; 

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
        const { t } = this.props
        return (<div className="main-exchange-wrapper bg-opacity s2">
            <h1> {t('digitalcurrencyconvserv')} </h1>
            <div id="props" className="f-home-fields">
                <p> {t('exchangeTo')} </p>
                <br className={"clear"}/>
            </div>

            <div className="change__block-footer">
                <a className="btn btn-white" onClick={this.onClickReturnBack}> {t('returnBackBtn')} </a>
                <a href="https://t.me/VikingBitBot" target="_blank" className="btn">
                    <span> {t('contactOurMng')} </span>
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

export default connect(mapStateToProps, mapDispatchToProps) (withTranslation() (ExchangeToCash));