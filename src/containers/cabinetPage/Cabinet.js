import React from 'react';
import {connect} from 'react-redux';

import './cabinet.scss';
import {selectIsLoggedIn, selectUserData} from "../../redux/modules/login/selectors";
import {setSignInData} from "../../redux/modules/login/actions";
import {setActivePage} from "../../redux/modules/state/actions";
import Constants from "../../constants/Constants";

class Cabinet extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    onClickLoggedOut = () => {
        this.props.setActivePage(Constants.PAGE_MAIN)
        this.props.setSignInData();
    }

    render() {
        if(!this.props.isLoggedIn) {

            return;
        }

        return (<div className="content">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">Account</h1>
                </div>
                <div className="content-wrapper user-account bg-opacity">
                    <div className="item">
                        <div className="item-title">Email: </div>
                        <span>{this.props.userData.email}</span>
                    </div>
                    <div className="item">
                        <div className="item-title">Username: </div>
                        <span>username</span>
                    </div>
                    <div className="item">
                        <div className="item-title">First name: </div>
                        <span>Alex</span>
                    </div>
                    <div className="item">
                        <div className="item-title">Last name: </div>
                        <span>Fox</span>
                    </div>
                    <div className="item">
                        <div className="item-title">Country: </div>
                        <span>username</span>
                    </div>
                </div>
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
        userData: selectUserData(state)
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setSignInData: () => {
            dispatch(setSignInData(false, '', ''));
        },
        setActivePage: (value) => {
            dispatch(setActivePage(value));
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cabinet);