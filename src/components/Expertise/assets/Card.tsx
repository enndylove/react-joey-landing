import React from "react";
import { IExpertiseCard } from "../../Interfaces";

export default function Card(props: IExpertiseCard): React.ReactElement {
    return (
        <div className="expertise__card" key={props.id}>
            <h3 className="expertise__title relative">
                {props.title}
            </h3>
            <p className="expertise__description">
                {props.description}
            </p>
        </div>
    )
}