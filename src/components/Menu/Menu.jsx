import React from "react";
import "./Menu.css";
import { ReactComponent as One } from "../../assets/menu-one.svg";
import { ReactComponent as Three } from "../../assets/menu-three.svg";
import { ReactComponent as Four } from "../../assets/menu-four.svg";
import { ReactComponent as Five } from "../../assets/menu-five.svg";

function Menu() {
    return(
        <>
            <div className="menu">
                <ul>
                    <li><a href="#"><Five /></a></li>
                    <li><a href="#"><Three /></a></li>
                    <li><a href="#"><Four /></a></li>
                    <li><a href="#"><One /></a></li>
                </ul>
            </div>
        </>
    )
}

export default Menu;