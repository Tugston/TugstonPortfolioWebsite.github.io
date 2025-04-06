//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information


import { useState } from "react";
import "../css/NavButton.css";
import "../Helper/ButtonEffects";
import { useBackgroundGlowGrow, useEaseOutFlashBorder, useFlashBorder } from "../Helper/ButtonEffects";

function NavButton({ text, uniqueButton }) {

    const primaryFlashAmnt = 11;
    const secondaryFlashAmnt = 9;
    const primaryButtonStep = 110;
    const secondaryButtonStep = 120;

    const [buttonConstructed, setButtonConstructed] = useState(false);


    const primaryBorderFlash = useEaseOutFlashBorder(
        '--hex-bg',
        '--hex-highlight',
        primaryFlashAmnt,
        1000,
        primaryButtonStep,
        setButtonConstructed
    );

    const secondaryBorderFlash = useEaseOutFlashBorder(
        '--hex-bg',
        '--hex-highlight-scnd',
        secondaryFlashAmnt,
        1000,
        secondaryButtonStep,
        setButtonConstructed
    );


    let myStyle = {};

    //primary and secondary NavButton css control
    if (uniqueButton === true) {

        let glowCompleted = useBackgroundGlowGrow(30, buttonConstructed);


        myStyle = {
            borderColor: `${secondaryBorderFlash}`,
            boxShadow: `var(--glow-secondary)`
        };

    } else {

        useBackgroundGlowGrow(30, buttonConstructed);

        myStyle = {
            borderColor: `${primaryBorderFlash}`,
            boxShadow: `var(--glow-primary)`
        };
    }

    return (
        <div className="nav-button-container">
            <button className="nav-button" style={myStyle}>
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