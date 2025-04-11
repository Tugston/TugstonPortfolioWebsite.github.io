//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information

import NavButton from "./DesktopNavButton";
import { MiddleTypeWritterEffect } from "../Helper/TextEffects";
import { useState } from "react";

//css
import '../css/NavBar.css';
import '../css/DesktopNavBar.css';

//NEED TO SETUP A WAY TO CONTROL THE UNIQUE BUTTON!
//HOME PAGE SHOULDN"T HAVE A UNIQUE BUTTON!
//ABOUT ME PAGE HAS ABOUT ME UNIQUE BUTTON!
//EDUCATION PAGE HAS EDUCATION UNIQUE BUTTON!
//PROJECTS PAGE HAS PROJECTS UNIQUE BUTTON!

function DesktopNavBar() {
    // const [isMenuActive, setIsMenuActive] = useState(false);
    const [isDoneConstructing, setIsDoneConstructing] = useState(false);

    const constructionTime = 140;

    const iconText = MiddleTypeWritterEffect(
        "<Vincent Pierce>",
        constructionTime,
        setIsDoneConstructing
    )

    //make alt text say current page or something for current active page button and home button
    return (
        <div className="navbar desktop-navbar" alt="This page's navigation bar">
            <button className="home-button" alt="Home page navigation button">
                <div className="svg-div">
                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                        <text className="logo-name" x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle">{iconText}</text>
                        <rect className="logo-rect" height="60" width="320" />
                    </svg>
                </div>
            </button>
            <div className="links-section">
                <NavButton text="About Me" uniqueButton={true} activated={isDoneConstructing} alt="About me page navigation button." />
                <NavButton text="Education" uniqueButton={false} activated={isDoneConstructing} alt="Education page navigation button." />
                <NavButton text="Projects" uniqueButton={false} activated={isDoneConstructing} alt="Projects page navigation button" />
            </div>
        </div>
    )
}

export default DesktopNavBar;



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: NavBar.jsx
//  Purpose: Creates a React Component for the Desktop Navigation bar.
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