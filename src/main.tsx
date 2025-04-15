import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThankYou } from './pages/ThankYou.tsx'
import Disclaimer from './pages/Disclaimer.tsx'
import { TermsAndConditions } from './pages/TermsAndConditions.tsx'
import { AboutDeveloper } from './pages/AboutDeveloper.tsx'
import { Admin } from './pages/Admin.tsx'

// Make sure all page components are imported in the main file
// to be available to the router

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
