import React, { lazy } from "react";

const Header:React.LazyExoticComponent<any> = lazy(() => import("./components/Header/Header"));
const Welcome:React.LazyExoticComponent<any> = lazy(() => import("./components/Welcome/Welcome"))

export default function Home(){
    return (
        <>
            <Header />
            <Welcome />
        </>
    );
}