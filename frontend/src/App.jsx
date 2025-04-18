//Copyright (c) 2025 Vincent "Tugston" Pierce
//
//See end of file for extended copyright information



import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const AboutMePage = React.lazy(() => import('./Pages/AboutMePage'));
const EducationPage = React.lazy(() => import('./Pages/Education'));
const ProjectPage = React.lazy(() => import('./Pages/ProjectsPage'));
const ErrorPage = React.lazy(() => import('./Pages/PageNotFound'));


function App() {
  return (
    <Suspense fallback={<div>Page Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMePage />} />
        <Route path="/Education" element={<EducationPage />} />
        <Route path="/Projects" element={<ProjectPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  )
}

export default App



//  Copyright (c) 2025 Vincent "Tugston" Pierce
//
//*********************************************
//  Filename: App.jsx
//  Purpose: Handles the overarching structure of the website
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