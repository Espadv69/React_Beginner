import React from 'react'
import ReactDom from 'react-dom'

import { Counter_useState } from './component/Counter_useState.jsx'
import './css/index.css'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <>
    <h1 className="h1-title">Hooks</h1>

    <Counter_useState />
  </>
)
