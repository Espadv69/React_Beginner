import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/App.jsx'
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <h1>hello, world!</h1>
    <App />
  </React.StrictMode>
)
