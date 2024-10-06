import React from "react";
import { IFooterItem } from "../../Interfaces";

export default function Item(props: IFooterItem): React.ReactElement {
    return (
        <li className="footer__item">
            <a
                href={props.link}
                className="footer__link"
                target="_blank"
            >
                {props.text}
            </a>
        </li>
    )
}