//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information



import { useState, useEffect, useRef } from "react";

export const PlainTypeWritterEffect = (text, speed, completed) => {
    const [displayText, setDisplayText] = useState("");
    const index = useRef(0);
    const displayTextRef = useRef("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (index.current < text.length) {
                displayTextRef.current += text.charAt(index.current);
                setDisplayText(() => displayTextRef.current);
                index.current++;
            } else {
                clearInterval(interval); //clear the interval when done typing
            }
        }, speed);

        return () => {
            setDisplayText("");
            clearInterval(interval);
        };
    }, [text, speed]);
    return displayText;
}

export const MiddleTypeWritterEffect = (text, speed, completed) => {
    const [displayText, setDisplayText] = useState("");
    const leftIndex = useRef(Math.floor(text.length / 2));
    const rightIndex = useRef(Math.floor(text.length / 2) + 1); //start 1 letter ahead for the right side
    let displayTextRef = useRef("");

    //invalid start location
    if (rightIndex > text.length || leftIndex < 0)
        return;

    useEffect(() => {
        const interval = setInterval(() => {

            if (leftIndex.current > 0) leftIndex.current--;
            if (rightIndex.current < text.length) rightIndex.current++;

            displayTextRef = text.slice(leftIndex.current, rightIndex.current);
            setDisplayText(displayTextRef);

            //check to see if both directions are finished, since some words could be odd letters
            if (rightIndex.current === text.length && leftIndex.current === 0) {
                clearInterval(interval);
                completed(true);
            }
        }, speed);

        return () => {
            setDisplayText("");
            clearInterval(interval);
        }
    }, [text, speed]);

    return displayText;
}



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: TextEffects.jsx
//  Purpose: Holds React Hook Components for the various text effects
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