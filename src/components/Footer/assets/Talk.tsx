import React from "react";
import { IFooterTalk } from "../../Interfaces";

// @ts-ignore
import IconTopRight from "../../../images/icons/top-right-arrow.svg"

export default function Talk(props: IFooterTalk): React.ReactElement {
    return(
        <div className="footer__talk w-full flex flex-col justify-center">
            <h4
                className="footer__talk-title text-center wow animate__animated animate__fadeInUp"
                style={{animationDelay: "0.2s"}}
            >
                {props.title}
            </h4>
            <a
                href={`mailto:${props.email}`}
                className="footer__talk-btn flex items-center justify-center wow animate__animated animate__fadeIn animate__repeat-2"
                style={{animationDelay: "0.4s"}}
            >
                {props.email}
                <span>
                    <img
                        className="footer__talk-btn-icon"
                        src={IconTopRight}
                        loading={"lazy"}
                        alt="top-right-arrow"
                    />
                </span>
            </a>
        </div>
    )
}