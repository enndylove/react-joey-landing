import React from 'react';
import {IWelcomeContent} from "../../Interfaces";

// @ts-ignore
import IDownArrow from "../../../images/icons/down-arrow.svg";

export default function Content(props: IWelcomeContent): React.ReactElement {
    return (
        <div className="welcome__content relative w-full">
            <h1 className="welcome__content-title">
                {props.title}
            </h1>
            <div className="welcome__content-btn absolute right-0 bottom-0 cursor-pointer flex items-center">
                {props.buttonText}
                <img
                    className="welcome__content-btn-icon"
                    src={IDownArrow}
                    loading={"lazy"}
                    alt="down-arrow-icon"
                />
            </div>
        </div>
    )
}