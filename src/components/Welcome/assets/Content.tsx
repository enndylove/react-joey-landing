import React from 'react';
import {IWelcomeContent} from "../../Interfaces";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"

// @ts-ignore
import IDownArrow from "../../../images/icons/down-arrow.svg";

gsap.registerPlugin(ScrollToPlugin)

export default function Content(props: IWelcomeContent): React.ReactElement {

    const ScrollToDown = () => {
        gsap.to(window, { duration: 1.2, scrollTo: "#downselection" });
    }

    return (
        <div className="welcome__content relative w-full">
            <h1 className="welcome__content-title">
                {props.title}
            </h1>
            <div
                className="welcome__content-btn absolute right-0 bottom-0 cursor-pointer flex items-center"
                onClick={ScrollToDown}
            >
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