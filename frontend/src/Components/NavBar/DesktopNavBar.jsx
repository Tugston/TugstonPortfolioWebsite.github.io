//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information

import NavButton from "./DesktopNavButton";
import { MiddleTypeWritterEffect } from "../../Helper/TextEffects";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

//css
import '../../css/Header/DesktopNavBar.css';
import '../../css/Utility/ColorFade.css';


function DesktopNavBar({ buttonFormats = [] }) {
    // const [isMenuActive, setIsMenuActive] = useState(false);
    const [isDoneConstructing, setIsDoneConstructing] = useState(false);

    const constructionTime = 140;
    const navigation = useNavigate();


    const iconText = MiddleTypeWritterEffect(
        "<Vincent Pierce>",
        constructionTime,
        setIsDoneConstructing
    )

    const handleHomeButtonClicked = () => {
        navigation("/");
    }

    //make alt text say current page or something for current active page button and home button
    return (
        <div className="navbar desktop-navbar vibrant-fade-base border-fade" alt="This page's navigation bar">
            <button className="home-button" alt="Home page navigation button" onClick={handleHomeButtonClicked}>
                <div className="svg-div">
                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                        <text className="logo-name" x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle">{iconText}</text>
                        <rect className="logo-rect" height="60" width="320" />
                    </svg>
                </div>
            </button>
            <div className="links-section">
                <ul className="row-list header-link-list">
                    <li>
                        <NavButton text="About Me" uniqueButton={buttonFormats[0]} activated={isDoneConstructing} navText="AboutMe" alt="About me page navigation button." />
                    </li>
                    <li>
                        <NavButton text="Education" uniqueButton={buttonFormats[1]} activated={isDoneConstructing} navText="Education" alt="Education page navigation button." />
                    </li>
                    <li>
                        <NavButton text="Projects" uniqueButton={buttonFormats[2]} activated={isDoneConstructing} navText="Projects" alt="Projects page navigation button" />
                    </li>
                </ul>
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