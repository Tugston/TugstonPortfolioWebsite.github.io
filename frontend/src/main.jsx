//This file is excluded from the copyright agreement and can be freely used, modified, redistrubited, without any restrictions.
//
// No copyright is claimed on this file.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
