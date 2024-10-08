import React from 'react';

// @ts-ignore
import IconTheme from '../../../images/icons/theme.svg'

export default function Theme() {
    return (
            <div
                className={`header__theme cursor-pointer wow animate__animated animate__fadeIn`}
                style={{animationDelay: "0.35s"}}
            >
                <img
                    className={`header__theme-icon`}
                    src={IconTheme}
                    alt="theme-icon"/>
            </div>
        )
}