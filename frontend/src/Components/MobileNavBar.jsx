//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information
import React, { useState, lazy, Suspense, useRef, useMemo } from 'react';
import { PlainTypeWritterEffect } from '../Helper/TextEffects';
import { useIsUnderScreenSize } from '../Helper/GeneralUtility';

//lazy import to provide brief visitors a smooth as possible experience
const SwipeMenu = React.lazy(() => import('../Components/MobileNavMenu'));

//css
import '../css/Header/MobileNavBar.css';
import '../css/Utility/ColorFade.css';

function MobileNavBar() {

    const [isDoneConstructing, setIsDoneConstructing] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [opened, setOpened] = useState(false);



    const constructionTime = 30;

    let shouldUseInitials = useIsUnderScreenSize(424);

    const iconText = PlainTypeWritterEffect(
        shouldUseInitials ? "<VP>" : "<Vincent Pierce>",
        constructionTime,
        setIsDoneConstructing
    );

    const handleNavButtonClick = (event) => {
        setOpened(!opened);

    }

    const rotationStyle = {
        transform: `rotate(${rotation}deg)`
    }

    return (
        <div className="navbar mobile-navbar vibrant-fade-base border-fade" alt="This page's navigation bar">
            <div className="logo-text-container">
                <button className="home-button-mobile">
                    <span className="logo-text" alt="Website's text based logo, returns to homepage">{iconText}</span>
                </button>
            </div>
            <div className="menu-container">
                <button className={`hamburger-menu ${opened ? 'opened' : ''}`} alt="Hamburger drop down menu, for page navigation." onClick={handleNavButtonClick}><span className={`hamburger-text-icon ${opened ? 'opened' : ''}`}>☰</span>
                </button>

                {
                    opened && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <SwipeMenu className="menu-window" />
                        </Suspense>
                    )
                }

            </div>

        </div >

    )
}

export default MobileNavBar;



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: MobileNavBar.jsx
//  Purpose: Creates a React Component for the Mobile Navigation bar.
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