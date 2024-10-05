import React, { lazy } from "react";

const Header:React.LazyExoticComponent<any> = lazy(() => import("./components/Header/Header"));
const Welcome:React.LazyExoticComponent<any> = lazy(() => import("./components/Welcome/Welcome"));
const Projects:React.LazyExoticComponent<any> = lazy(() => import("./components/Projects/Projects"));
const Expertise:React.LazyExoticComponent<any> = lazy(() => import("./components/Expertise/Expertise"));

export default function Home(){
    return (
        <>
            <Header />
            <Welcome />
            <Projects />
            <Expertise />
        </>
    );
}