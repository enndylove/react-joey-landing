import React from "react";
import {IWelcomeAbout} from "../../Interfaces";

export default function About(props: IWelcomeAbout): React.ReactElement {
    return (
        <div className="welcome__about flex w-full justify-between">
            <div className="welcome__about-content">
                <h5 className="welcome__about-title">
                    Let’s Talk
                </h5>
                <p className="welcome__about-email">
                    {props.email}
                </p>
            </div>
            <div className="welcome__about-content">
                <p className="welcome__about-description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}