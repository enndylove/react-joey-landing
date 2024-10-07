import React, { Component } from "react";
import Card from "./assets/Card";

import '../../styles/expertise.scss';

export default class Expertise extends Component<{}, React.ReactElement>{
    render(): React.ReactElement {
        return (
            <section className="expertise wrapper m-auto" id="about">
                <h2 className="projects__content-title wow animate__animated animate__fadeInUp">
                    Expertise
                </h2>

                <div className="expertise__cards grid">
                    <Card
                        id={0}
                        title="Branding"
                        description="Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept."
                    />
                    <Card
                        id={1}
                        title="UI Design"
                        description="I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
                    />
                    <Card
                        id={2}
                        title="UX Design"
                        description="I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements."
                    />
                    <Card
                        id={3}
                        title="Development"
                        description="I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites."
                    />
                </div>
            </section>
        );
    }
}