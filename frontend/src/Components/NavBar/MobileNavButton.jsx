//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information


import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Header/MobileNavButton.css';


const MobileNavButton = forwardRef((props, ref) => {
    const displayText = props.children;
    const navPage = "/" + props.navText;
    const navigation = useNavigate();

    let backgroundStyle = {};

    if (props.uniqueButton === true) {
        backgroundStyle = {
            "--mobile-nav-button-background": `var(--hex-bg-scnd)`
        };
    } else {
        backgroundStyle = {
            "--mobile-nav-button-background": `var(--hex-bg)`
        };
    }

    const handleClick = () => {
        navigation(navPage);
    }

    return (
        <div className="button-container">
            <button className="mobile-nav-button" ref={ref} style={backgroundStyle} onClick={handleClick}><span className="button-text">{displayText}</span></button>
        </div>
    )
});

export default MobileNavButton;



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: MobileNavButton.jsx
//  Purpose: Creates a Nav Button for mobile
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