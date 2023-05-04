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
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    const onMouseMove = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) return;
        e.preventDefault();

        const {clientX, scrollX, isScrolling} = state;

        if (isScrolling) {
            ref.current.scrollLeft = scrollX + e.clientX - clientX;

            setState({
                ...state,
                scrollX: scrollX + e.clientX - clientX,
                clientX: e.clientX
            })
        }
    }

    const onMouseDown = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) return;
        e.preventDefault();

        setState({
            ...state,
            isScrolling: true,
            clientX: e.clientX
        })
    }

    const onMouseUp = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) return;
        e.preventDefault();

        setState({
            ...state,
            isScrolling: false,
        })
    }

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
            const item = props.currencyList[key];
            tablesArray.push(
                <ul className="table" key={index}>
                    <li className="col_title">{key}</li>
                    <li className="row">{item.buy}</li>
                    <li className="row">{item.sell}</li>
                </ul>
            )
        }
        return tablesArray;
    }

    return (
        <div className="banner">
            <div className="block_table">
                <ul className="table table_title">
                    <li className="col_title">📈</li>
                    <li className="row">Buy</li>
                    <li className="row">Sell</li>
                </ul>
                <div
                    className="bannerScrollableContainer"
                    ref={ref}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >{buildBanner(props)}</div>
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