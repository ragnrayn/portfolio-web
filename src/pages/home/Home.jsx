import React from "react";
import "./Home.css";
import AboutMe from "../../components/AboutMe/AboutMe";
import Main from "../../components/Main/Main";
import Menu from "../../components/Menu/Menu";

function Home() {

    return(
        <>
            <div className="home">
                <AboutMe />
                <Main />
                <Menu />
            </div>
        </>
    )
}

export default Home;