import React from 'react'
import ReactDOM from 'react-dom/client'

import { Clock } from './components/Clock.jsx'
import { Timer } from './components/Timer.jsx'
import { UserList } from './components/UserList.jsx'

import './css/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="container-index">
    <h1 className="h1-title">React Hooks</h1>
    <Clock />
    <hr />
    <Timer />
    <UserList />
  </div>
)
