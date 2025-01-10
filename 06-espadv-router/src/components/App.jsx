import { useState, useEffect } from 'react'

import HomePage from '../pages/Home.jsx'
import AboutPage from '../pages/About.jsx'

import { EVENTS } from '../consts.js'
import '../css/App.css'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
]

function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const page = routes.find({ path } => path === currentPath)?.component
}

export const App = () => {
  return <div></div>
}
