import React from "react";
import { IExpertiseCard } from "../../Interfaces";

export default function Card(props: IExpertiseCard): React.ReactElement {
    return (
        <div className="expertise__card" key={props.id}>
            <h3
                className="expertise__title relative wow animate__animated animate__fadeInUp"
                style={{animationDelay: "0.2s"}}
            >
                {props.title}
            </h3>
            <p
                className="expertise__description wow animate__animated animate__fadeInUp"
                style={{animationDelay: "0.4s"}}
            >
                {props.description}
            </p>
        </div>
    )
}