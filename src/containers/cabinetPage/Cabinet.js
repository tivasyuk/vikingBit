import React from 'react';
import {connect} from 'react-redux';

import './cabinet.scss';
import {selectIsLoggedIn, selectUserData} from "../../redux/modules/login/selectors";

class Cabinet extends React.Component {
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
        return (<div className="content">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">Account</h1>
                </div>
                <div className="content-wrapper bg-opacity">

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

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cabinet);