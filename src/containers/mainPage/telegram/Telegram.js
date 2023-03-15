import React from 'react';
import './telegram.scss';
import tg from "../../../img/telegram-image.png";

const Telegram = () => {
    return (
        <div className="main-page-telegram-bot">
            <div className="left">
                <h2 className="title">Exchange cryptocurrencies on the go with Telegram Bot</h2>
                <div className="left-content">
                    <p>In the modern world, social networks and instant messengers are becoming not only a means of
                        communication, but also a place for exchanging digital currencies. The Internet exchanger
                        DotSatoshi offers to quickly and profitably convert cryptocurrencies in the Telegram
                        messenger.<br/><br/>The obvious advantages of bots are the speed of operations, the clear
                        functionality of chats and the security of transactions!</p></div>
                <div className="left-bottom">
                    <a href="https://t.me/VikingBitBot" target="_blank" className="btn">
                        <span>Start a chat with a bot</span>
                    </a>
                </div>
            </div>
            <div className="right">
                <img src={tg} alt="tg"/>
            </div>
        </div>
    );
}

export default Telegram;