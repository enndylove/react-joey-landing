import React, {lazy, useEffect, useRef} from "react";
import gsap from "gsap";

// Lazy load components
const Header = lazy(() => import("./components/Header/Header"));
const Welcome = lazy(() => import("./components/Welcome/Welcome"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Expertise = lazy(() => import("./components/Expertise/Expertise"));
const XTrack = lazy(() => import("./components/XTrack/XTrack"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));
const Footer = lazy(() => import("./components/Footer/Footer"));

export default function Home(): React.ReactElement {
    let d = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(d.current, {opacity: 0}, {opacity: 1});
    }, []);


    return (
        <div id="smooth-content" ref={d} className="smooth-content">
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