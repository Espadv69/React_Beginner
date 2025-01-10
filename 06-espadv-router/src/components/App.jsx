import { useState, useEffect } from 'react'
import '../css/App.css'

const NAVIGATION_EVENT = 'pushState'

function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Create a personalized event
  const navEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navEvent)
}

function HomePage() {
  return (
    <>
      <h1 className="h1-title">Home</h1>
      <p className="p-spa">
        This is an example page for creating a React Router from scratch.
      </p>
      <button
        type="button"
        onClick={() => navigateTo('/about')}
        className="a-spa"
      >
        About us
      </button>
    </>
  )
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

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return (
    <div>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}
