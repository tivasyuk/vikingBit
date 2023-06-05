import React, {useRef} from 'react';
import './languageFlags.scss';

import {useTranslation} from "react-i18next";
import i18next from 'i18next'
import language from "../../img/language.png";
import {useOutsideClick} from "../useOutsideClickHook";

export default function LanguageFlags() {

    const languages = [
        {
            code: 'en',
            name: 'English'
        },
        {
            code: 'ru',
            name: 'Русский'
        },
        {
            code: 'ua',
            name: 'Українська'
        },
    ]
    const {t} = useTranslation();
    const currentLanguageCode = localStorage.getItem('i18nextLng') || 'en';
    const [isListOpen, setIsListOpen] = React.useState(null);
    const flagsRef = useRef(null);
    const onClose = () => {
        setIsListOpen(false)
    }

    const toggleList = () => {
        setIsListOpen(!isListOpen)
    }

    useOutsideClick(flagsRef, onClose, isListOpen);

    return (
        <div className="flags" ref={flagsRef}>
            <div className="flags-title-wrapper" onClick={toggleList}>
                <img className="flags-icon" src={language} alt="language"/>
                <div className="flags-title">{currentLanguageCode.toUpperCase()}</div>
            </div>
            {isListOpen && (
                <div
                    role="list"
                    className="flags-list"
                >
                    {languages.map(({code, name}) => (
                        <div onClick={() => {
                            i18next.changeLanguage(code);
                            onClose()
                        }} className={`flags-item ${currentLanguageCode === code ? 'active' : ''}`}>
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}