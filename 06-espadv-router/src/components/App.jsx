import { useState } from 'react'
import '../css/App.css'

const NAVIGATION_EVENT = 'pushState'

function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Create a personalized event
  const navEvent = new Event(NAVIGATION_EVENT)
}

function HomePage() {
  return (
    <>
      <h1 className="h1-title">Home</h1>
      <p className="p-spa">
        This is an example page for creating a React Router from scratch.
      </p>
      <a href="/about" className="a-spa">
        About us
      </a>
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
      <a href="/" className="a-spa">
        Home
      </a>
    </>
  )
}

export const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <div>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </div>
  )
}
