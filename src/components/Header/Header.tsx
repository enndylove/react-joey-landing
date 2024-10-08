import './../../styles/header.scss';

import { Component } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"

import Item from "./assets/Item";
import Theme from "./assets/Theme";

// @ts-ignore
import logo from './../../images/main/logo.svg';
// @ts-ignore
import IconMenu from './../../images/icons/menu.svg';

gsap.registerPlugin(ScrollToPlugin)

interface HeaderState {
    activeItem: string;
    burgerMenu: boolean;
    isScrolled: boolean;
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeItem: "#home",
            burgerMenu: false,
            isScrolled: false,
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
        const isScrolled = scrollTop > 60;

        if (isScrolled !== this.state.isScrolled) {
            this.setState({ isScrolled });
        }

        const sections = [
            { id: "#home", start: 0, end: 610 },
            { id: "#projects", start: 611, end: 1626 },
            { id: "#about", start: 1627, end: 2400 },
            { id: "#downselection", start: 2401, end: Infinity }
        ];

        const activeSection = sections.find(
            section => scrollTop >= section.start && scrollTop <= section.end
        );

        if (activeSection && activeSection.id !== this.state.activeItem) {
            this.setState({ activeItem: activeSection.id });
        }
    };

    targetItem(link: string) {
        this.setState({ activeItem: link, burgerMenu: false });
        gsap.to(window, { duration: 1.2, scrollTo: `${link}` });
        if (!this.state.burgerMenu) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden');
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
                <div className="flex items-center">
                    <img
                        className={`header__logo wow animate__animated animate__fadeIn ${this.state.burgerMenu ? "active" : ""}`}
                        src={logo} loading={"lazy"} alt="logo"
                        style={{animationDelay: "0.3s"}}
                    />

                    <Theme/>
                </div>

                <nav
                    className={`header__nav wow animate__animated animate__fadeIn ${burgerMenu ? "active" : ""} ${isScrolled ? "isScrolled" : ""}`}
                    style={{animationDelay: "0.4s"}}
                >
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
