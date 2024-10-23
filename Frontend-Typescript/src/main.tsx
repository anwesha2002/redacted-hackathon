import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "github-calendar/dist/github-calendar.min.js"
import "github-calendar/dist/github-calendar-responsive.css"
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
)
