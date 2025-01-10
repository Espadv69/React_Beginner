import { useState, useEffect } from 'react'

import HomePage from '../pages/Home.jsx'
import AboutPage from '../pages/About.jsx'

import { EVENTS } from '../consts.js'
import '../css/App.css'

export const App = () => {
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

  return (
    <div>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}
