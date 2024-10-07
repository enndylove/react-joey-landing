import React from "react";
import Talk from "./assets/Talk";
import Content from "./assets/Content";

import '../../styles/footer.scss';

export default class Footer extends React.Component<{}, React.ReactElement> {
    render() {
        return (
            <footer className="footer wrapper" id="downselection">
                <Talk
                    title="Let’s talk!"
                    email="hello@joey.co"
                />

                <Content
                    licence_year="2023"
                    licence_madeBy="Djectstudio"
                    dribble_link="https://dribbble.com"
                    instagram_link="https://instagram.com"
                    linkedIn_link="https://linkedin.com"
                />
            </footer>
        );
    }
}