import React from "react";
import Content from "./assets/Content";

import '../../styles/testimonials.scss'

export default class Testimonials extends React.Component<{}, React.ReactElement> {
    render() {
        return (
            <section className="testimonials wrapper">
                <Content
                    title="Testimonials"
                    description="“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”"
                    author="Chris Ellington"
                    info="Product Lead,Gatha."
                />
            </section>
        )
    }
}