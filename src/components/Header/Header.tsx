import './../../styles/header.scss';
import { Component } from "react";
import Item from "./assets/Item";
// @ts-ignore
import logo from './../../images/main/logo.svg';
// @ts-ignore
import IconMenu from './../../images/icons/menu.svg';

interface HeaderState {
    activeItem: string;
    burgerMenu: boolean;
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeItem: "#home",
            burgerMenu: false,
        };
    }

    targetItem(link: string) {
        this.setState({ activeItem: link });
    }

    toggleBurgerMenu = () => {
        this.setState((prevState) => ({ burgerMenu: !prevState.burgerMenu }));
    };

    render() {
        const { activeItem, burgerMenu } = this.state;

        return (
            <header className="header flex flex-col items-center w-max">
                <img className={`header__logo ${this.state.burgerMenu ? "active" : ""}`} src={logo} loading={"lazy"} alt="logo" />

                <nav className={`header__nav ${burgerMenu ? "active" : ""}`}>
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

                <div
                    className={`header__burger cursor-pointer absolute flex items-center justify-center ${this.state.burgerMenu ? "active" : ""}`}
                    onClick={this.toggleBurgerMenu}
                >
                    <img className="header__burger-icon" src={IconMenu} loading={"lazy"} alt="menu-icon" />
                </div>
            </header>
        );
    }
}
