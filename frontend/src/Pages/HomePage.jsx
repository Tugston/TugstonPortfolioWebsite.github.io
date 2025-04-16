//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information



import { useEffect, useRef, useState } from "react";
import { useNavBarComponent } from "../Helper/FetchDeviceComponents";
import '../Components/Body/HomePageHero.jsx';

import '../css/Pages/HomePage.css';
import '../css/Pages/PageGeneral.css';
import HomepageHeroSection from "../Components/Body/HomePageHero.jsx";



function HomePage() {

    const NavBar = useNavBarComponent();

    return (
        <>
            <header>
                <NavBar buttonFormats={[false, false, false]} />
            </header>
            <HomepageHeroSection />
        </>
    )
}

export default HomePage;



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: HomePage.jsx
//  Purpose: Function Component for the Home Page of the site
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