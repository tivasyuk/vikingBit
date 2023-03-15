import React from 'react';

import './mainPage.scss';

import ExchangeCount from "./exchangeCount/ExchangeCount";
import Reviews from "./reviews/Reviews";
import Steps from "./steps/Steps";
import Telegram from "./telegram/Telegram";

const MainPage = () => {
    return (
        <div className="main-content">
            <div className="container">
                <ExchangeCount/>
                <Steps/>
                <Reviews/>
                <Telegram/>
            </div>
        </div>
    );
}

export default MainPage;