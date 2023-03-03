import React from 'react';
import {connect} from 'react-redux';

import './steps.scss';
import mainPageApp from "../../img/main-page-app.png";

class Steps extends React.Component {
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
        return (<div className="main-page-steps">
            <div className="left">
                <img src={mainPageApp} alt=""/>
            </div>
            <div className="right">
                <h2 className="title">How to make exchanges</h2>
                <div className="right-steps">
                    <div className="item">
                        <div className="item-info uppercase">Step 1</div>
                        <p>Choose a cryptocurrency pair <br/> and an amount to exchange</p>
                    </div>
                    <div className="item">
                        <div className="item-info uppercase">Step 2</div>
                        <p>Enter the recipient's wallet address</p>
                    </div>
                    <div className="item">
                        <div className="item-info uppercase">Step 3</div>
                        <p>Send tokens to continue the exchange</p>
                    </div>
                    <div className="item">
                        <div className="item-info uppercase">Step 4</div>
                        <p>Get your chosen digital currency</p>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export const mapStateToProps = (state) => {
    return {}
};

export const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Steps);