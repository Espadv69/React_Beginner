import React from 'react'
import ReactDom from 'react-dom/client'

import { Counter_useState } from './component/Counter_useState.jsx'
import { ToDoList } from './component/ToDoList.jsx'
import './css/index.css'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <h1 className="h1-title">Hooks</h1>

    <Counter_useState />
    <ToDoList />
  </React.StrictMode>
)
