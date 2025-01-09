import React from 'react'
import ReactDOM from 'react-dom/client'

import { MouseFollower } from './components/MouseFollower.jsx'
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <MouseFollower />
  </div>
)