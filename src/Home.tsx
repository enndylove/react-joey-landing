import React, { lazy } from "react";

const Header:React.LazyExoticComponent<any> = lazy(() => import("./components/Header/Header"));
const Welcome:React.LazyExoticComponent<any> = lazy(() => import("./components/Welcome/Welcome"));
const Projects:React.LazyExoticComponent<any> = lazy(() => import("./components/Projects/Projects"));
const Expertise:React.LazyExoticComponent<any> = lazy(() => import("./components/Expertise/Expertise"));
const XTrack:React.LazyExoticComponent<any> = lazy(() => import("./components/XTrack/XTrack"));
const Testimonials:React.LazyExoticComponent<any> = lazy(() => import("./components/Testimonials/Testimonials"));
const Footer: React.LazyExoticComponent<any> = lazy(() => import("./components/Footer/Footer"));

export default function Home(){
    return (
        <>
            <Header />
            <Welcome />
            <Projects />
            <Expertise />
            <XTrack />
            <Testimonials />
            <Footer />
        </>
    );
}