//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information

import React, { useMemo } from "react";
import { useIsDevice, DeviceType } from "../Helper/GeneralUtility";

const DesktopNavBar = React.lazy(() => import('../Components/NavBar/DesktopNavBar'));
const MobileNavBar = React.lazy(() => import('../Components/NavBar/MobileNavBar'));

export function useNavBarComponent() {
    const isMobile = useIsDevice(DeviceType.MOBILE);
    const isTablet = useIsDevice(DeviceType.TABLET);

    //use the correct Nav Bar (that will be lazy imported) based on the screen
    const NavBar = useMemo(() => {
        if (isMobile || isTablet) return MobileNavBar;   //mobile and tablet will be the same
        return DesktopNavBar;
    }, [isMobile, isTablet]);

    return NavBar;
}



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: FetchDeviceComponents.jsx
//  Purpose: Handles lazy importing components in order to clean up the Pages
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