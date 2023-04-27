import React from 'react';
import './banner.scss';
import { selectCurrencyList } from '../../redux/modules/state/selectors';
import { connect } from 'react-redux';

const Banner = (props) => {
    const buildBanner = (props) => {
        let index = 0;
        const tablesArray = [];
        for (const key in props.currencyList) {
            index += 1;
            const item = props.currencyList[key];
            tablesArray.push(  
                <ul className="table" key={index}>
                    <li className="col_title">{key}</li>
                    <li className="row">{item.buy}</li>
                    <li className="row">{item.sell}</li>
                </ul>
            )
        }
        return tablesArray;

    }
    return (
        <div className="banner">
            <div className="block_table">
                <ul className="table table_title">
                    <li className="col_title">📈</li>
                    <li className="row">Buy</li>
                    <li className="row">Sell</li>
                </ul>
                {buildBanner(props)}
            </div>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        currencyList: selectCurrencyList(state),
    }
};

export default connect(mapStateToProps, null)(Banner);