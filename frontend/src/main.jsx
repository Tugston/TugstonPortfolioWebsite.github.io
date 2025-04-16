//This file is excluded from the copyright agreement and can be freely used, modified, redistrubited, without any restrictions. These terms may change. Any files subsequently imported are subject to their own copyright clause.


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/TugstonPortfolioWebsite.github.io">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
