import React from "react";
import { IFooterTalk } from "../../Interfaces";

// @ts-ignore
import IconTopRight from "../../../images/icons/top-right-arrow.svg"

export default function Talk(props: IFooterTalk): React.ReactElement {
    return(
        <div className="footer__talk w-full flex flex-col justify-center">
            <h4 className="footer__talk-title text-center">
                {props.title}
            </h4>
            <a
                href={`mailto:${props.email}`}
                className="footer__talk-btn flex items-center justify-center"
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