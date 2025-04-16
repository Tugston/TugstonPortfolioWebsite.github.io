//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information



import React, { useEffect, useMemo, useState } from "react";
import { MiddleTypeWritterEffect } from '../../Helper/TextEffects.jsx'
import { setCSSVar } from "../../Helper/GeneralUtility.jsx";
import '../../css/Generics/DropDownMenu.css';

function AnimatedOpenMenu({ animComplete, height, closeAnim }) {

    //grab the animation direction
    let menuClass = "draw-menu";
    (menuClass += closeAnim ? " drop-menu-close-animation" : " drop-menu-open-animation");

    //set the height that is passed in
    useEffect(() => {
        setCSSVar('--drop-down-menu-animation-height', `${height}rem`);
    }, [height]);

    //notifys the Drop Down Menu
    const handleAnimEnd = (e) => {
        if (e.animationName === "expand-width") {
            animComplete(true);
        } else if (e.animationName === "decrease-height") {
            animComplete(true);
        }
    }


    return (
        <div className="drop-down-menu-wrapper">
            <div id="overlay-menu" className={menuClass} onAnimationEnd={handleAnimEnd}>
            </div>
        </div>
    )
}

function DropDownMenu({ buttonContexts = [], animated = false, typedText = true, animationHeight = 3, isClosing = false, onClosingComplete = () => { } }) {

    const [isOpenAnimDone, setIsOpenAnimDone] = useState(!animated); //skip if no animation
    const [isClosingAnimDone, setIsClosingAnimDone] = useState(isClosing && !animated);
    const [isDoneConstructing, setIsDoneConstructing] = useState(false);
    const typeTime = 100;

    const buttonRefs = useMemo(() =>
        buttonContexts.map(() => React.createRef()), [buttonContexts.length]);

    const processButtons = buttonContexts.map((button, index) => {

        //grab the current button's text (assuming it has text)
        const label = button.props.children;

        const animatedText = typedText ? MiddleTypeWritterEffect(label, typeTime, setIsDoneConstructing, true) : label;


        //replace incoming text with the new animated text
        return (
            <li className="drop-down-btn-container" key={index}>
                {React.cloneElement(button, { ref: buttonRefs[index] }, animatedText)}
            </li>
        );
    });

    if (!isOpenAnimDone) {
        return (<AnimatedOpenMenu animComplete={setIsOpenAnimDone} height={animationHeight} />);
    }

    if (isOpenAnimDone && !isClosingAnimDone && isClosing) {
        return (<AnimatedOpenMenu animComplete={() => {
            setIsClosingAnimDone(true);
            onClosingComplete();
        }} height={animationHeight} closeAnim={true} />);
    }
    else {
        return (
            <div id="overlay-menu" className="drop-down-menu-wrapper">
                <ul className="drop-down-list">
                    {processButtons}
                </ul>
            </div>
        );
    };
}

export default DropDownMenu;


//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: DropDownMenu.jsx
//  Purpose: Creates a react component that is a drop down menu
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