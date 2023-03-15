import React from 'react';
import './googleAuth.scss';
import {GoogleLogin} from '@react-oauth/google';

class GoogleAuth extends React.Component {

     responseMessage = (response) => {
        console.log(response);
    };

    errorMessage = (error) => {
        console.log(error);
    };

    render() {
        return (<GoogleLogin onSuccess={this.responseMessage} onFailure={this.errorMessage}
                             /*buttonText="Login"
                             render={renderProps => (<button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>)} */
        />);
    }
}

export default GoogleAuth;