import './../../styles/header.scss';

import { Component } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"

import Item from "./assets/Item";
// @ts-ignore
import logo from './../../images/main/logo.svg';
// @ts-ignore
import IconMenu from './../../images/icons/menu.svg';

gsap.registerPlugin(ScrollToPlugin)

interface HeaderState {
    activeItem: string;
    burgerMenu: boolean;
    isScrolled: boolean; // Новий стан для стеження за скролом
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeItem: "#home",
            burgerMenu: false,
            isScrolled: false, // Початкове значення
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrolled = scrollTop > 60; // Можна змінити поріг на будь-який інший

        if (isScrolled !== this.state.isScrolled) {
            this.setState({ isScrolled });
        }
    };

    targetItem(link: string) {
        this.setState({ activeItem: link });
        gsap.to(window, { duration: 1.2, scrollTo: `${link}` });
    }

    toggleBurgerMenu = () => {
        this.setState((prevState) => ({ burgerMenu: !prevState.burgerMenu }));
        if (!this.state.burgerMenu) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden');
    };

    render() {
        const { activeItem, burgerMenu, isScrolled } = this.state;

        return (
            <header className="header flex flex-col items-center w-max">
                <img className={`header__logo ${this.state.burgerMenu ? "active" : ""}`} src={logo} loading={"lazy"} alt="logo" />

                <nav className={`header__nav ${burgerMenu ? "active" : ""} ${isScrolled ? "isScrolled" : ""}`}>
                    <ul className="header__ul flex items-center">
                        <Item
                            onClick={() => this.targetItem("#home")}
                            title="Home"
                            active={activeItem === "#home"}
                        />
                        <Item
                            onClick={() => this.targetItem("#projects")}
                            title="Projects"
                            notification={20}
                            active={activeItem === "#projects"}
                        />
                        <Item
                            onClick={() => this.targetItem("#about")}
                            title="About"
                            active={activeItem === "#about"}
                        />
                        <Item
                            onClick={() => this.targetItem("#downselection")}
                            title="Contact"
                            active={activeItem === "#downselection"}
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
