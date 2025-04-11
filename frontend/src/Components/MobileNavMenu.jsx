//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information



import MobileNavButton from "./MobileNavButton"

import '../css/MobileNavMenu.css';


function CloseBox() {

}

function NavMenu() {

    return (
        <div>
            <div className="selection-box close-box" alt="Closes the navigational menu.">
                <button className="exit-button"><span className="close-text">X</span></button>
            </div>
            <ul>
                <li>
                    <MobileNavButton>About Me</MobileNavButton>
                </li>
                <li>
                    <MobileNavButton>Education</MobileNavButton>
                </li>
                <li>
                    <MobileNavButton>Projects</MobileNavButton>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;


//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: MobileNavBar.jsx
//  Purpose: Creates a React Component for the Drop Down Navigation menu.
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