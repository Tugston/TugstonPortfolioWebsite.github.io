//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information

import NavButton from "./NavButton";
import { PlainTypeWritterEffect } from "../Helper/TextEffects";
import { MiddleTypeWritterEffect } from "../Helper/TextEffects";
import '../css/NavBar.css'

function ToggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function NavBar() {
    // const [isMenuActive, setIsMenuActive] = useState(false);

    const iconText = MiddleTypeWritterEffect(
        "<Vincent Pierce>",
        75
    )


    /*const iconText = PlainTypeWritterEffect(
        "Vincent Pierce",
        100
    )*/

    return (
        <div className="navbar">
            <span className="logo-name">{iconText}</span>
            <div className="links-section">
                <NavButton text="About Me" uniqueButton={true} />
                <NavButton text="Education" uniqueButton={false} />
                <NavButton text="Projects" uniqueButton={false} />
            </div>
            <div className="hamburger-menu" onClick={ToggleMenu}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </div>
        </div>
    )
}

export default NavBar;



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: NavBar.jsx
//  Purpose: Creates a React Component for the navigation bar portion of the header.
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