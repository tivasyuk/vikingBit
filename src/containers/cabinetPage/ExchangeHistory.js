import React from 'react';
import {connect} from 'react-redux';

import './cabinet.scss';
import './history.scss';
import {selectExchangeHistoryData, selectIsLoggedIn, selectUserData} from "../../redux/modules/login/selectors";
import {getUserExchangeHistory, setSignInData} from "../../redux/modules/login/actions";

class ExchangeHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() {
        this.props.onGetUserExchangeHistory();
    }

    onClickLoggedOut = () => {
        window.location.href = '/'
        this.props.setSignInData();
    }

    buildHistory = () => {
        let index = 0;
        const tablesArray = [];
        for (const key in this.props.history) {
            index += 1;
            const item = this.props.history[key];
            tablesArray.push(
                <div className="flex-table row" role="rowgroup" key={index}>
                    <div className="flex-row first" role="cell">{key}</div>
                    <div className="flex-row" role="cell">{item.status}</div>
                    <div className="flex-row" role="cell">{("" + (new Date(item.timestamp)).toLocaleString())}</div>
                    <div className="flex-row" role="cell">{item.toSum.value} {item.toSum.currency}</div>
                    <div className="flex-row" role="cell">{item.cardName || item.wallet}</div>
                    <div className="flex-row" role="cell">You sent {item.fromSum.value} {item.fromSum.currency}</div>
                </div>
            )
        }
        return tablesArray;
    }

    render() {
        // if(!this.props.isLoggedIn) {
        //
        //     return;
        // }

        return (<div className="content exchange-history">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">Transaction history</h1>
                </div>

                <div className="bg-opacity">

                    <div className="table-container" role="table">
                        <div className="flex-table header" role="rowgroup">
                            <div className="flex-row" role="columnheader">#</div>
                            <div className="flex-row first" role="columnheader">Status</div>
                            <div className="flex-row" role="columnheader">Date</div>
                            <div className="flex-row" role="columnheader">Amount</div>
                            <div className="flex-row" role="columnheader">Payment Method</div>
                            <div className="flex-row" role="columnheader">Description</div>
                        </div>
                        {this.buildHistory()}
                    </div>
                </div>
                <div className="cabinet-footer">
                    <a className="btn btn-primary" onClick={this.onClickLoggedOut}>Logged out</a>
                </div>
            </div>





            <div className="container">
                <div className="content-top">
                    <h1 className="title">Transaction history</h1>
                </div>
            </div>
            <div className="table-container" role="table">
                <div className="flex-table header" role="rowgroup">
                    <div className="flex-row" role="columnheader">#</div>
                    <div className="flex-row first" role="columnheader">Status</div>
                    <div className="flex-row" role="columnheader">Date</div>
                    <div className="flex-row" role="columnheader">Amount</div>
                    <div className="flex-row" role="columnheader">Payment Method</div>
                    <div className="flex-row" role="columnheader">Description</div>
                </div>
                {this.buildHistory()}
            </div>
            <div className="container">
                <div className="cabinet-footer">
                    <a className="btn btn-primary" onClick={this.onClickLoggedOut}>Logged out</a>
                </div>
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: selectIsLoggedIn(state),
        userData: selectUserData(state),
        history: selectExchangeHistoryData(state),
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setSignInData: () => {
            dispatch(setSignInData(false, '', ''));
        },
        onGetUserExchangeHistory: () => {
            dispatch(getUserExchangeHistory());
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ExchangeHistory);