import React from 'react';

// @ts-ignore
import IconTheme from '../../../images/icons/theme.svg'

export default function Theme({ onClick, burgerActive }: any) {
    return (
            <div
                className={`header__theme cursor-pointer animate__animated animate__fadeIn ${burgerActive ? 'active' : ''}`}
                style={{animationDelay: "0.35s"}}
                onClick={onClick}
            >
                <img
                    className={`header__theme-icon`}
                    src={IconTheme}
                    alt="theme-icon"/>
            </div>
        )
}