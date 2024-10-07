import React from "react";
import {IHeaderItem} from "../../Interfaces";

export default function Item(props: IHeaderItem): React.ReactElement {
    return (
        <li className="header__item flex">
            <div
                onClick={props.onClick}
                // href={props.link}
                className={`header__link flex items-center cursor-pointer ${props?.active ? "active" : ""}`}
            >
                {props?.notification ? (
                    <span className="header__notification flex items-center justify-center">
                        {props.notification <= 99 ? props.notification : "99+"}
                    </span>
                ) : <></>}
                {props.title}
            </div>
        </li>
    );
}