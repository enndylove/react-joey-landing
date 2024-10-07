import React from "react";
import { IFooterItem } from "../../Interfaces";

export default function Item(props: IFooterItem): React.ReactElement {
    return (
        <li className="footer__item">
            <a
                href={props.link}
                className="footer__link wow animate__animated animate__fadeIn"
                target="_blank"
                style={{animationDelay: "0.4s"}}
            >
                {props.text}
            </a>
        </li>
    )
}