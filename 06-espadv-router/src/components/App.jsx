import { useState, useEffect } from 'react'

import { HomePage } from '../pages/Home.jsx'
import { EVENTS } from '../consts.js'
import '../css/App.css'

const NAVIGATION_EVENT = 'pushState'

export function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Create a personalized event
  const navEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navEvent)
}



function AboutPage() {
  return (
    <>
      <h1 className="h1-title">About</h1>
      <div className="div-about">
        <img
          src="https://avatars.githubusercontent.com/u/162121948?s=96&v=4"
          alt="Espadv"
          className="img-spa"
        />
        <p className="p-spa">
          Hello!, I'm Espadv and i'm creating a clon of React router.
        </p>
      </div>
      <button onClick={() => navigateTo('/')} className="a-spa">
        Home
      </button>
    </>
  )
}

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
