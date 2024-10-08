import React, { lazy, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";

// @ts-ignore
import WOW from "wowjs";

import 'animate.css';

// Lazy load components
const Header = lazy(() => import("./components/Header/Header"));
const Welcome = lazy(() => import("./components/Welcome/Welcome"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Expertise = lazy(() => import("./components/Expertise/Expertise"));
const XTrack = lazy(() => import("./components/XTrack/XTrack"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));
const Footer = lazy(() => import("./components/Footer/Footer"));

export default function Home(): React.ReactElement {
    const contentRef = useRef<HTMLDivElement>(null);
    let d = useRef<HTMLDivElement>(null)

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();


        document.body.setAttribute("data-theme", "light");
    }, [])

    useEffect(() => {
        gsap.fromTo(d.current, {opacity: 0}, {opacity: 1});

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

    return (
        <div ref={d}>
            <div ref={contentRef}>
                <Header/>
                <Welcome/>
                <Projects/>
                <Expertise/>
                <XTrack/>
                <Testimonials/>
                <Footer/>
            </div>
        </div>
    );
}
