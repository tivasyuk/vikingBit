import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./redux/store";
import {Provider} from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </GoogleOAuthProvider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
