import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { storeContainer } from "./redux/store";
import { createBrowserHistory } from 'history';
import {Provider} from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import * as i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

export const store = storeContainer;

//Localisation
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en','ru', 'ua'],
        fallbackLng: "en",
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage']
        },
        backend: {
            loadPath: './localization/{{lng}}/translation.json',
        },
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory();
root.render(
    <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
        <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter history={history}>
                        <App/>
                    </BrowserRouter>
                </Provider>
        </React.StrictMode>
    </GoogleOAuthProvider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
