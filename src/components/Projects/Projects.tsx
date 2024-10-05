import React, { Component } from "react";
import Content from "./assets/Content";
import Card from "./assets/Card";

import '../../styles/projects.scss'

export default class Projects extends Component<{}, {}>{
    render(): React.ReactElement {
        return (
            <section className="wrapper projects">
                <Content
                    title="Projects"
                    description="As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies."
                    link="#empty"
                />

                <div className="projects__cards">
                    <Card
                        id="0"
                        imageName="Card3"
                        title="Crtly"
                        description="Mobile App"
                    />
                    <Card
                        id="1"
                        imageName="Card4"
                        title="Tansto"
                        description="Web Design"
                    />
                    <Card
                        id="2"
                        imageName="Card1"
                        title="Senta"
                        description="Mobile App & Branding"
                    />
                    <Card
                        id="3"
                        imageName="Card2"
                        title="Crint"
                        description="Mobile App"
                    />
                </div>
            </section>
        );
    }
}