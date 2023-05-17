import React, {useEffect, useRef, useState} from 'react';
import './banner.scss';
import {selectCurrencyList} from '../../redux/modules/state/selectors';
import {connect} from 'react-redux';

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
        for (const key in props.currencyList) {
            index += 1;
            if (key === 'UAH') continue;
            const item = props.currencyList[key];
            let titleText = key;
            let buyValue = item.buy;
            let sellValue = item.sell;
            if (item.type === 'crypto') {
                titleText = `${key} (to ${props.currencyList['USD'].name})`;
                buyValue = +(item.buy / props.currencyList['USD'].buy).toFixed(3);
                sellValue = +(item.sell / props.currencyList['USD'].sell).toFixed(3);
            }
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
            <div className="block_table">
                <div ref={ref} className="bannerScrollableContainer">
                    {buildBanner(props)}
                </div>
                {state.showScrollArrows && <span className="scrollBtn scrollToLeft" onClick={moveToLeft}/>}
                {state.showScrollArrows && <span className="scrollBtn scrollToRight" onClick={moveToRight}/>}
            </div>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        currencyList: selectCurrencyList(state),
    }
};

export default connect(mapStateToProps, null)(Banner);