import React from "react";
import Hero from "../Hero/Hero";
import PricePlan from "../PricePlan/PricePlan";
import Recommendations from "../Recommendations/Recommendations";
import Service from "../Service/Service";
import "./Main.css";

function Main(){
    return(
        <>
            <div className="main">
                <Hero />
                <Service />
                <PricePlan />
                <Recommendations />
            </div>
        </>
    )
}

export default Main;