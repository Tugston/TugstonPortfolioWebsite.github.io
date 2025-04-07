//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information


import { useRef, useState } from "react";
import "../css/NavButton.css";
import "../Helper/ButtonEffects";
import { useBackgroundGlowGrow, useEaseOutFlashBorder } from "../Helper/ButtonEffects";
import { delay } from "../Helper/GeneralUtility";

function NavButton({ text, uniqueButton, activated }) {

    const primaryFlashAmnt = 11;
    const secondaryFlashAmnt = 10;
    const primaryButtonStep = 50;
    const secondaryButtonStep = 40;
    const btnRef = useRef();

    const [buttonOn, setButtonOn] = useState(false);


    const primaryBorderFlash = useEaseOutFlashBorder(
        '--hex-bg',
        '--hex-highlight',
        primaryFlashAmnt,
        400,
        primaryButtonStep,
        setButtonOn
    );

    const secondaryBorderFlash = useEaseOutFlashBorder(
        '--hex-bg',
        '--hex-highlight-scnd',
        secondaryFlashAmnt,
        400,
        secondaryButtonStep,
        setButtonOn
    );


    //styling control for after the button is free to activate
    //handles the flashing and color glow turning on
    let activeStyle = {};

    useBackgroundGlowGrow(30, 20, buttonOn, 1000);

    //primary and secondary NavButton css control
    if (uniqueButton === true) {

        activeStyle = {
            borderColor: `${secondaryBorderFlash}`,
            boxShadow: `var(--glow-secondary)`
        };

    } else {

        activeStyle = {
            borderColor: `${primaryBorderFlash}`,
            boxShadow: `var(--glow-primary)`
        };
    }

    //do basically what I did for the icon, and use this link to help: https://codepen.io/ZachSaucier/pen/nMRbQN
    //also move this into another component probably, may be useful?
    if (!activated)

        //then I can just return the component here!
        return (
            <div className="nav-button-container">
                <button className="nav-button">
                    <span className="nav-button-text">{text}</span>
                </button>
            </div>
        )

    //return the completed button and its animations
    return (
        <div className="nav-button-container">
            <button ref={btnRef} className="nav-button" style={activeStyle}>
                <span className="nav-button-text">{text}</span>
            </button>
        </div>
    )
}

export default NavButton;



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: NavButton.jsx
//  Purpose: Provides React Component for the navigation buttons in the headers
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