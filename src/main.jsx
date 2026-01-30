import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Portfolio from './App2.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Portfolio/> */}
  </StrictMode>,
)
