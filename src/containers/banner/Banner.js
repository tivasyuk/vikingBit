import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="block_table">
                <ul className="table table_title">
                    <li className="col_title">📈</li>
                    <li className="row">Buy</li>
                    <li className="row">Sell</li>
                </ul>
                <ul className="table">
                    <li className="col_title">Bitcoin (BTC)</li>
                    <li className="row">1.081.600,00</li>
                    <li className="row">1.081.600,00</li>
                </ul>
                <ul className="table">
                    <li className="col_title">Ethereum (ETH)</li>
                    <li className="row">76.283,00</li>
                    <li className="row">76.283,00</li>
                </ul>
                <ul className="table">
                    <li className="col_title">Tether (USDT)</li>
                    <li className="row">36,77</li>
                    <li className="row">36,77</li>
                </ul>
                <ul className="table">
                    <li className="col_title">BNB (BNB)</li>
                    <li className="row">12.506,30</li>
                    <li className="row">12.506,30</li>
                </ul>
                <ul className="table">
                    <li className="col_title">Euro (EUR)</li>
                    <li className="row">40</li>
                    <li className="row">41</li>
                </ul>
                <ul className="table">
                    <li className="col_title">Dollar (USD)</li>
                    <li className="row">38</li>
                    <li className="row">39</li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;