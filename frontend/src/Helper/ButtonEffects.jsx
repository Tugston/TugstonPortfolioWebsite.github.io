//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information



import { useState, useEffect, useRef } from "react";
import { getCSSVar, setCSSVar } from "./GeneralUtility";

//adds a background glow to a element that will slowly spread outwards for the given speed
export const useBackgroundGlowGrow = (speed, finishedSetup) => {

    const [glowSpreadCompleted, setGlowSpreadComplete] = useState(false);

    useEffect(() => {

        //if there is something that is required to finish before this glow can execute!
        //makes the glow not appear unless its done
        if (!finishedSetup) {
            setCSSVar('--glow-range-spread', `0px`);
            setCSSVar('--glow-range-bloom', `0px`);
            return;
        }

        //glow spread can be passed in as a var in the future if needed
        let glowSpread = 0;

        const glowProgress = setInterval(() => {

            //check if glow spread is less than the max amount, can be passed in as variable as needed as well.
            if (glowSpread < 20) {

                glowSpread += 0.5;

                //update the css vars so the spread emits itself
                setCSSVar('--glow-range-spread', `${glowSpread / 2}px`);
                setCSSVar('--glow-range-bloom', `${glowSpread}px`);

                console.log(glowSpread);

            } else {
                clearInterval(glowProgress);
                setGlowSpreadComplete(true);
            }
        }, speed);

        return () => clearInterval(glowProgress);

    }, [speed, finishedSetup]);


    return glowSpreadCompleted;

};



export const useFlashBorder = (offColorNameVar, finalColorNameVar, amntOfFlashes, speed, finishedFlashing) => {
    const [flashColor, setFlashColor] = useState('');
    const flashAmnt = useRef(0);

    useEffect(() => {

        const offColor = getCSSVar(offColorNameVar);
        const finalColor = getCSSVar(finalColorNameVar);

        flashAmnt.current = 0;
        setFlashColor(offColor);

        const flash = setInterval(() => {

            //flash until hitting the amount of flashes, then hold the final color
            if (flashAmnt.current < amntOfFlashes) {

                flashAmnt.current++;

                setFlashColor(flashAmnt.current % 2 === 0 ? 'white' : offColor);

            } else {
                setFlashColor(finalColor);
                clearInterval(flash);
                finishedFlashing(true);
            };

        }, speed);

        return () => {
            clearInterval(flash);
            setFlashColor(offColor);
        };

    }, [offColorNameVar, finalColorNameVar, amntOfFlashes, speed, finishedFlashing]);

    return flashColor;
}

export const useEaseOutFlashBorder = (offColorNameVar, finalColorNameVar, amntOfFlashes, speed, speedDecrement = 0.2, finishedFlashing) => {
    const [flashColor, setFlashColor] = useState('');
    const flashAmnt = useRef(0);
    const timeoutID = useRef(null);

    useEffect(() => {

        //retrieve the variable values
        const getCSSVar = (varName) =>
            getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

        const offColor = getCSSVar(offColorNameVar);
        const finalColor = getCSSVar(finalColorNameVar);

        flashAmnt.current = 0;
        setFlashColor(offColor);
        let currentSpeed = speed;

        const flash = () => {

            //flash until hitting the amount of flashes, then hold the final color
            if (flashAmnt.current < amntOfFlashes) {

                flashAmnt.current++;

                if (flashAmnt.current % 2 === 0) {
                    setFlashColor('white');
                } else {
                    setFlashColor(offColor);
                }

                currentSpeed = Math.max(0, currentSpeed - speedDecrement);
                timeoutID.current = setTimeout(flash, currentSpeed);

            } else {
                setFlashColor(finalColor);
                finishedFlashing(true);
            };

        };

        flash();

        return () => {
            clearTimeout(timeoutID.current);
            setFlashColor(offColor);
        };

    }, [offColorNameVar, finalColorNameVar, amntOfFlashes, speed, speedDecrement, finishedFlashing]);

    return flashColor;
}

export const useWrapBorder = (finalColor, speed, percentage) => {
    const [borderPercent, setBorderPercent] = useState(0);
    const requestRef = useRef();

    useEffect(() => {
        const animate = () => {
            setBorderPercent((prev) => {
                const diff = percentage - prev;

                if (Math.abs(diff) < 0.5) return percentage; //just snap to the final value

                const step = diff * 0.1;
                return prev + step;
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, [percentage]);

    //border fill logic
    const clamped = Math.max(0, Math.min(borderPercent, 100));
    const totalLength = 4 * 100;
    const lengthToDraw = (clamped / 100) * totalLength;

    const bottom = Math.min(lengthToDraw, 100);
    const right = Math.min(Math.max(lengthToDraw - 100, 0), 100);
    const top = Math.min(Math.max(lengthToDraw - 200, 0), 100);
    const left = Math.min(Math.max(lengthToDraw - 300, 0), 100);

    return (
        <div className="nav-button-div">
            <div className="bottom-border" style={{ width: '${bottom}', height: '3rem' }} />
            <div className="right-border" style={{ width: '3rem', height: '${right}' }} />
            <div className="left-border" style={{ width: '3rem', height: '${left}' }} />
            <div className="top-border" style={{ width: '${top}', height: '3rem' }} />
        </div>

    )
}



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: ButtonEffects.jsx
//  Purpose: Provides React hook components for buttons
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
