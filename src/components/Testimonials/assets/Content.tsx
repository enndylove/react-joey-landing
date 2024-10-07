import React from "react";
import {ITestimonialsContent} from "../../Interfaces";

export default function Content(props: ITestimonialsContent): React.ReactElement {
    return (
        <div className="testimonials__content flex items-end justify-between">
            <div className="testimonials__block content">
                <h3
                    className="testimonials__title wow animate__animated animate__fadeInUp"
                    style={{animationDelay: "0.2s"}}
                >
                    {props.title}
                </h3>
                <p
                    className="testimonials__description wow animate__animated animate__fadeIn"
                    style={{animationDelay: "0.4s"}}
                >
                    {props.description}
                </p>
            </div>
            <div className="testimonials__block">
                <h6
                    className="testimonials__author wow animate__animated animate__fadeIn"
                    style={{animationDelay: "0.6s"}}
                >
                    {props.author}
                </h6>
                <p
                    className="testimonials__info wow animate__animated animate__fadeIn"
                    style={{animationDelay: "0.8s"}}
                >
                    {props.info}
                </p>
            </div>
        </div>
    )
}