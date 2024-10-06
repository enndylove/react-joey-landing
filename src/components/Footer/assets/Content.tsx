import React from "react";
import { IFooterContent } from "../../Interfaces";

import Item from "./Item";

export default function Content(props: IFooterContent): React.ReactElement {
    return (
        <div className="footer__content flex items-center justify-between w-full">
            <span className="footer__content-licence">
                {`${props.licence_year} © — Made by ${props.licence_madeBy}`}
            </span>

            <nav className="footer__nav">
                <ul className="footer__ul flex">
                    <Item
                        link={`${props.dribble_link}`}
                        text="Dribbble"
                    />
                    <Item
                        link={`${props.instagram_link}`}
                        text="Instagram"
                    />
                    <Item
                        link={`${props.linkedIn_link}`}
                        text="LinkedIn"
                    />
                </ul>
            </nav>
        </div>
    )
}