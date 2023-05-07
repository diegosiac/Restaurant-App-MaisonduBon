import React from 'react'
import ReactDOM from 'react-dom/client'
import AppReservation from './App/AppReservation'
import { HashRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppReservation />
    </HashRouter>
  </React.StrictMode>
)
