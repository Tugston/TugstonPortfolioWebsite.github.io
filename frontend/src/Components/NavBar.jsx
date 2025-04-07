//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information

import NavButton from "./NavButton";
import { MiddleTypeWritterEffect } from "../Helper/TextEffects";
import '../css/NavBar.css';
import { useState } from "react";

function ToggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

//NEED TO SETUP A WAY TO CONTROL THE UNIQUE BUTTON!
//HOME PAGE SHOULDN"T HAVE A UNIQUE BUTTON!
//ABOUT ME PAGE HAS ABOUT ME UNIQUE BUTTON!
//EDUCATION PAGE HAS EDUCATION UNIQUE BUTTON!
//PROJECTS PAGE HAS PROJECTS UNIQUE BUTTON!

function NavBar() {
    // const [isMenuActive, setIsMenuActive] = useState(false);
    const [isDoneConstructing, setIsDoneConstructing] = useState(false);

    const constructionTime = 140;

    const iconText = MiddleTypeWritterEffect(
        "<Vincent Pierce>",
        constructionTime,
        setIsDoneConstructing
    )

    return (
        <div className="navbar">
            <div className="svg-div">
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                    <text className="logo-name" x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle">{iconText}</text>
                    <rect className="logo-rect" height="60" width="320" />
                </svg>
            </div>
            <div className="links-section">
                <NavButton text="About Me" uniqueButton={true} activated={isDoneConstructing} />
                <NavButton text="Education" uniqueButton={false} activated={isDoneConstructing} />
                <NavButton text="Projects" uniqueButton={false} activated={isDoneConstructing} />
            </div>
            <div className="hamburger-menu" onClick={ToggleMenu}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </div>
        </div>
    )
}

export default NavBar;



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: NavBar.jsx
//  Purpose: Creates a React Component for the navigation bar portion of the header.
//  Author: Vincent Pierce or Tugston
//
//*********************************************
//  About:
//  "TugstonPortfolioWebsite.github.io" is my personal portfolio website, created by myself.
//  It incorporates React.js, JSX, and CSS. It is my first real project involving front-end web development.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You should have obtained a copy of the license when downloading the source code.
//  If not, you may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.