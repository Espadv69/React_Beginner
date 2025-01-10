import { useState, useEffect } from 'react'

import HomePage from '../pages/Home.jsx'
import AboutPage from '../pages/About.jsx'

import { EVENTS } from '../consts.js'
import '../css/App.css'

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

  const route = routes.find(({ path }) => path === currentPath) // Corregido
  const Page = route ? route.component : DefaultComponent // Obtener el componente asociado
  return <Page />
}

export const App = () => {
  return (
    <div>
      <Router
        routes={[
          {
            path: '/',
            component: HomePage,
          },
          {
            path: '/about',
            component: AboutPage,
          },
        ]}
        defaultComponent={() => <div>404 Not Found</div>} // Componente por defecto
      />
    </div>
  )
}
