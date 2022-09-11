import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProvideContext } from './Context'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideContext>
        <App />
      </ProvideContext>
    </BrowserRouter>
  </React.StrictMode>
)
