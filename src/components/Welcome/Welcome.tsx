import './../../styles/welcome.scss'

import { Component } from "react";

import Content from "./assets/Content";
import About from "./assets/About";

export default class Welcome extends Component<{}, {}>{
    render() {
        return (
            <section className="welcome" id="home">
                <div className="wrapper m-auto">
                    <Content
                        title="Websites& Branding"
                        buttonText="SCROLL DOWN"
                    />

                    <About
                        email="hello@joey.co"
                        description="Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments."
                    />
                </div>
            </section>
        );
    }
}