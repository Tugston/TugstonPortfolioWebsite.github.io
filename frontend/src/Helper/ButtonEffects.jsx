//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information



import { useState, useEffect, useRef } from "react";
import { getCSSVar, setCSSVar, setSpecificCSSVar } from "./GeneralUtility";

//adds a background glow to a element that will slowly spread outwards for the given speed
export const useBackgroundGlowGrow = (speed, glowMaxSpread, finishedSetup, delayAmnt) => {

    const [completedGlow, setCompletedGlow] = useState(false);
    const isAnimating = useRef(false);
    const glowSpread = useRef(0);
    const canStartGlowing = useGlowStartTrigger(finishedSetup, delayAmnt);

    useEffect(() => {

        //reset the state for all header buttons
        if (!finishedSetup && !completedGlow) {
            setCSSVar('--glow-range-spread', `0px`);
            setCSSVar('--glow-range-bloom', `0px`);
            return;
        }

        if (!canStartGlowing || isAnimating.current || completedGlow) return;
        isAnimating.current = true;

        const glowProgress = setInterval(() => {
            if (glowSpread.current < glowMaxSpread) {

                glowSpread.current += 0.5;

                //update the css vars so the spread emits itself
                setCSSVar('--glow-range-spread', `${glowSpread.current / 2}px`);
                setCSSVar('--glow-range-bloom', `${glowSpread.current}px`);
            }
            else {
                clearInterval(glowProgress);
                setCompletedGlow(true);
            }
        }, speed);

        return () => clearInterval(glowProgress);
    }, [canStartGlowing, glowMaxSpread, speed, delayAmnt])

    return completedGlow;
}

//helper for the delays on the glow is ignored if there is no delay needed
const useGlowStartTrigger = (finishedSetup, delayAmnt) => {

    const [shouldStartGlow, setShouldStartGlow] = useState(false);
    const hasStarted = useRef(false);

    useEffect(() => {
        let glowDelay;

        //check if timer is currently occuring
        if (hasStarted.current || !finishedSetup) return;

        glowDelay = setTimeout(() => {
            setShouldStartGlow(true);
            hasStarted.current = true; //set the timer to be occuring
        }, delayAmnt);

        return () => clearTimeout(glowDelay);

    }, [finishedSetup, delayAmnt]);

    return shouldStartGlow;
}

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

export const useEaseOutFlashBorder = (offColorNameVar, finalColorNameVar, amntOfFlashes, speed, speedDecrement, finishedFlashing) => {
    const [flashColor, setFlashColor] = useState('');
    const timeoutID = useRef(null);

    useEffect(() => {

        //retrieve the variable values
        const getCSSVar = (varName) =>
            getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

        const offColor = getCSSVar(offColorNameVar);
        const finalColor = getCSSVar(finalColorNameVar);

        //flashAmnt.current = 0;
        setFlashColor(offColor);
        let flashAmnt = 0;
        let currentSpeed = speed;

        const flash = () => {

            //flash until hitting the amount of flashes, then hold the final color
            if (flashAmnt <= amntOfFlashes) {

                if (flashAmnt % 2 === 0) {
                    setFlashColor('white');
                } else {
                    setFlashColor(offColor);
                }

                flashAmnt++;

                //adjust the speed over time to make it faster blinks
                currentSpeed = Math.max(0, currentSpeed);
                timeoutID.current = setTimeout(flash, currentSpeed);

                currentSpeed -= speedDecrement;

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
