import React from "react";
import {ITestimonialsContent} from "../../Interfaces";

export default function Content(props: ITestimonialsContent): React.ReactElement {
    return (
        <div className="testimonials__content flex items-end justify-between">
            <div className="testimonials__block content">
                <h3 className="testimonials__title">
                    {props.title}
                </h3>
                <p className="testimonials__description">
                    {props.description}
                </p>
            </div>
            <div className="testimonials__block">
                <h6 className="testimonials__author">
                    {props.author}
                </h6>
                <p className="testimonials__info">
                    {props.info}
                </p>
            </div>
        </div>
    )
}