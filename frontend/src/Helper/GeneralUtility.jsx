//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information

import { useEffect, useState } from "react";



//retrieve variables
export const getCSSVar = (varName) =>
    getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

//set all the css variables 
export const setCSSVar = (varName, varValue) =>
    document.documentElement.style.setProperty(varName, varValue);

//set specific component css variables
export const setSpecificCSSVar = (element, varName, varValue) => {
    if (element?.style) {
        element.style.setProperty(varName, varValue);
    }
};

//delay
export function delay(timeMs) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

//SCREEN SCALING//

//enum to easily access the various device types I am supporting
export const DeviceType = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop'
};

const matchMediaQueries = {
    [DeviceType.MOBILE]: '(max-width: 767px)',
    [DeviceType.TABLET]: '(min-width: 768px) and (max-width: 1023px)',
    [DeviceType.DESKTOP]: '(min-width: 1024px)'
};

export const useIsDevice = (checkDevice) => {

    //check if the window is valid and if matches the current device
    const [isMatching, setIsMatching] = useState(() => {
        if (typeof window === 'undefined') return false; //SSR-safe
        return window.matchMedia(matchMediaQueries[checkDevice]).matches;
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const matchQ = window.matchMedia(matchMediaQueries[checkDevice]);
        const handler = (e) => setIsMatching(e.matches);

        //Add the listener
        matchQ.addEventListener('change', handler);
        setIsMatching(matchQ.matches);

        return () => matchQ.removeEventListener('change', handler);

    }, [checkDevice])

    return isMatching;
}

//SCREEN SCALING//



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: GeneralUtility.jsx
//  Purpose: Provides common functions (and arrow functions) that other files may need.
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