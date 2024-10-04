import './../../styles/header.scss';
import { Component } from "react";
import Item from "./assets/Item";
// @ts-ignore
import logo from './../../images/main/logo.svg';

interface HeaderState {
    activeItem: string;
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeItem: "#home",
        };
    }

    targetItem(link: string) {
        this.setState({ activeItem: link });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <header className="header flex flex-col items-center w-max">
                <img className="header__logo" src={logo} loading={"lazy"} alt="logo" />

                <nav className="header__nav">
                    <ul className="header__ul flex items-center">
                        <Item
                            onClick={() => this.targetItem("#home")}
                            link="#home"
                            title="Home"
                            active={activeItem === "#home"}
                        />
                        <Item
                            onClick={() => this.targetItem("#projects")}
                            link="#projects"
                            title="Projects"
                            notification={20}
                            active={activeItem === "#projects"}
                        />
                        <Item
                            onClick={() => this.targetItem("#about")}
                            link="#about"
                            title="About"
                            active={activeItem === "#about"}
                        />
                        <Item
                            onClick={() => this.targetItem("#contact")}
                            link="#contact"
                            title="Contact"
                            active={activeItem === "#contact"}
                        />
                    </ul>
                </nav>
            </header>
        );
    }
}
