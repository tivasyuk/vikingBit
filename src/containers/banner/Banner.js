import React, {useEffect, useRef, useState} from 'react';
import './banner.scss';
import {selectCurrencyList} from '../../redux/modules/state/selectors';
import {connect} from 'react-redux';
import { selectExchangeConfig } from '../../redux/modules/exchange/selectors';

const Banner = (props) => {
    let ref = useRef(null);
    const [state, setState] = useState({
        showScrollArrows: true,
        isScrolling: false,
        clientX: 0,
        scrollX: 0
    });

    useEffect(() => {
        const el = ref.current;

        if (el) {
            const onWheel = e => {
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth'
                })
            }

            el.addEventListener('wheel', onWheel);

            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);

    useEffect(() => {
        const el = ref.current;

        if (el) {
            const handleResize = () => {
                setState({
                    ...state,
                    showScrollArrows: el.scrollWidth !== el.offsetWidth
                })
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [ref.current && ref.current.scrollWidth])

    const moveToLeft = e => {
        const el = ref.current;

        if (el) {
            e.preventDefault();
            let scrollTo = el.scrollLeft - 300;
            if (scrollTo < -299) scrollTo = el.scrollWidth - el.offsetWidth;
            el.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            })
        }
    }

    const moveToRight = e => {
        const el = ref.current;

        if (el) {
            e.preventDefault();
            let scrollTo = el.scrollLeft + 300;
            if (scrollTo > el.scrollWidth - el.offsetWidth + 299) scrollTo = 0
            el.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            })
        }
    }

    const buildBanner = (props) => {
        let index = 0;
        const tablesArray = [];
        for (const key in props.exchangeConfig['USD']) {
            index += 1;
            const item = props.exchangeConfig['USD'][key];
            let titleText = key;
            let buyValue = item.buy;
            let sellValue = item.sell;
            titleText = `USD / ${key}`;
            buyValue = (+item.buy).toFixed(3);
            sellValue = (+item.sell).toFixed(3);
            tablesArray.push(
                <ul className="table" key={index}>
                    <li className="col_title">{titleText}</li>
                    <li className="row">{buyValue} / {sellValue}</li>
                </ul>
            )
        }
        for (const key in props.exchangeConfig['EUR']) {
            index += 1;
            const item = props.exchangeConfig['EUR'][key];
            let titleText = key;
            let buyValue = item.buy;
            let sellValue = item.sell;
            titleText = `EUR / ${key}`;
            buyValue = (+item.buy).toFixed(3);
            sellValue = (+item.sell).toFixed(3);
            tablesArray.push(
                <ul className="table" key={index}>
                    <li className="col_title">{titleText}</li>
                    <li className="row">{buyValue} / {sellValue}</li>
                </ul>
            )
        }
        for (const key in props.exchangeConfig['USDT']) {
            index += 1;
            const item = props.exchangeConfig['USDT'][key];
            let titleText = key;
            let buyValue = item.buy;
            let sellValue = item.sell;
            titleText = `${key} / USDT`;
            buyValue = parseFloat(1 / item.buy).toFixed(3);
            sellValue = parseFloat( 1 /item.sell).toFixed(3);
            tablesArray.push(
                <ul className="table" key={index}>
                    <li className="col_title">{titleText}</li>
                    <li className="row">{buyValue} / {sellValue}</li>
                </ul>
            )
        }
        return tablesArray;
    }

    return (
        <div className="banner">
        {props.exchangeConfig && <div className="block_table">
                <div ref={ref} className="bannerScrollableContainer">
                    {buildBanner(props)}
                </div>
                {state.showScrollArrows && <span className="scrollBtn scrollToLeft" onClick={moveToLeft}/>}
                {state.showScrollArrows && <span className="scrollBtn scrollToRight" onClick={moveToRight}/>}
            </div>}
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        currencyList: selectCurrencyList(state),
        exchangeConfig: selectExchangeConfig(state),
    }
};

export default connect(mapStateToProps, null)(Banner);