# React Joey Landing <img src="https://img.shields.io/static/v1?label=🌀 TypeScript&message=React ✨&color=ffffff" />

A modern, responsive landing page template built with React.js, designed to be customizable and easy to deploy. This project serves as a starting point for building landing pages with a clean design and performance in mind.

## Features

- **Responsive Design**: Adapts to all screen sizes, ensuring a great user experience on mobile, tablet, and desktop.
- **Customizable Components**: Built with reusable and easily customizable React components.
- **Modern UI**: Clean, sleek design inspired by current web trends.
- **Optimized for Performance**: Fast-loading pages with lazy-loaded assets and minimal dependencies.
- **Smooth Scrolling**: Implemented with [Lenis](https://github.com/darkroomengineering/lenis) for smooth page transitions.
- **Easy Deployment**: Ready to be deployed on platforms like Vercel, Netlify, or any static hosting service.

![](https://i.ibb.co/WyBPTqz/300x300-logo.png)

## Getting Started

### Prerequisites

###### To run this project, you need to have Node.js installed on your machine. You can download and install Node.js from [here](https://nodejs.org/en).

### Installation
1. Clone the repository:
```shell
git clone https://github.com/enndylove/react-joey-landing.git
```
2. Navigate to the project directory:
```shell
cd react-joey-landing
```
3. Install the required dependencies:
```shell
npm install
```

## Key functionality
#### Lenis smooth-scrolling in page component `src/Home.tsx`
```tsx
import React, { useRef } from "react";

import Lenis from "lenis";

useEffect(() => {
    const lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        touchMultiplier: window.innerWidth <= 768 ? 3 : 2,
    });

    function onAnimationFrame(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(onAnimationFrame);
    }

    requestAnimationFrame(onAnimationFrame);

    return () => {
        lenisInstance.destroy();
    };
}, []);


// example usage:


export default function Home(): React.ReactElement {
    return (
        <div ref={contentRef}>
            <Header/>
            <Welcome/>
            <Projects/>
            <Expertise/>
            <XTrack/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}
```
### Theme
#### `src/theme/ThemeContext.tsx`
```tsx
import React from 'react'

export const themes = {
    dark: 'dark',
    light: 'light',
}

export const ThemeContext = React.createContext({})
```
#### `src/theme/ThemePrivider.tsx`
```tsx
import React from 'react'
import { ThemeContext, themes } from './ThemeContext'

const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`
    if (Object.values(themes).includes(theme)) return theme

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return themes.light

    return themes.dark
}

const ThemeProvider = ({ children }: any) => {
    const [ theme, setTheme ] = React.useState(getTheme)

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
```
#### `src/components/Header/Header.tsx`
```tsx
import { Component } from "react";
import { ThemeContext, themes } from '../../theme/ThemeContext'
import Theme from "./assets/Theme";

export default class Header extends Component<{}, HeaderState> {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, setTheme }: any) => (
                    <Theme
                        onClick={() => {
                            if (theme === themes.light) setTheme(themes.dark)
                            if (theme === themes.dark) setTheme(themes.light)
                        }}
                        burgerActive={burgerMenu}
                    />
                )}
            </ThemeContext.Consumer>
        )
    }
}
```
#### `src/components/Header/assets/Theme.tsx`
```tsx
import React from 'react';

// @ts-ignore
import IconTheme from '../../../images/icons/theme.svg'

export default function Theme({ onClick, burgerActive }: any) {
    return (
            <div
                className={`header__theme cursor-pointer animate__animated animate__fadeIn ${burgerActive ? 'active' : ''}`}
                style={{animationDelay: "0.35s"}}
                onClick={onClick}
            >
                <img
                    className={`header__theme-icon`}
                    src={IconTheme}
                    alt="theme-icon"/>
            </div>
        )
}
```

#### `src/components/styles/_colors.scss`
```scss
:root[data-theme="light"] {
  --black: #000000;
  --grey: #C4C4C4;
  --grey-50: #F9F9F9;
  --white: #FFFFFF;
}

:root[data-theme="dark"] {
  --black: #FFFFFF;
  --grey: #F9F9F9;
  --grey-50: #141414;
  --white: #000000;
}
```
#### example custom use 
```scss
* {
  transition: .5s;
}

html[data-theme="dark"] {
  .header {
    &__button {
      background-color: var(--grey-50);
    }
  }
}
```

#### Theme provider `src/index.tsx`
```tsx
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    </React.StrictMode>
);
```

### Gsap save scroll (save Y offset, last div in visible)
```tsx
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Home(): React.ReactElement {
    let d = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        gsap.fromTo(d.current, {opacity: 0}, {opacity: 1});
    }, []);

    return;
}
```

### [WOW](https://www.npmjs.com/package/wowjs) && [Animate.css](https://animate.style)
#### wow:
```tsx
useEffect(() => {
    new WOW.WOW({
        live: false
    }).init();
}, [])
```

#### animate.css
```tsx
import 'animate.css';
```

#### example usage(classNameS):
```tsx
<div 
    className="welcome__content-title wow animate__animated animate__fadeIn"
    style={{animationDelay: "0.3s"}}
>
    {content}
</div>
```

### Interfaces `src/components/Interfaces.ts`
```ts
export interface IHeaderItem {
    onClick?: () => void,
    active?: boolean,
    notification?: number | 0,
    title: string,
}

export interface IWelcomeContent {
    title: string,
    buttonText: string,
}

export interface IWelcomeAbout {
    email: string,
    description: string,
}

export interface IProjectContent {
    title: string,
    description: string,
    link: string,
}

export interface IProjectCard {
    id: number,
    imageName: string,
    title: string,
    description: string,
}

export interface IExpertiseCard {
    id: number,
    title: string,
    description: string,
}

export interface IXTrackText {
    text: string,
}

export interface ITestimonialsContent {
    title: string,
    description: string,
    author: string,
    info: string,
}

export interface IFooterTalk {
    title: string,
    email: string,
}

export interface IFooterContent {
    licence_year: string,
    licence_madeBy: string,
    dribble_link: string,
    instagram_link: string,
    linkedIn_link: string,
}

export interface IFooterItem {
    link: string,
    text: string,
}
```

#### [Figma link](https://www.figma.com/community/file/1310269010337969032)

## License
#### This project is licensed under the [MIT License](https://github.com/enndylove/react-joey-landing/blob/main/LICENSE.md).

### Delicious coffee to you friends ☕
