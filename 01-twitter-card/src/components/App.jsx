import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  // We can pass the props in the same way as we did in the previous example.
  const aitor = { username: 'aitor69' } // Bad practice

  const [username, setUsername] = useState('terminator._')
  const handleUsername = () => setUsername('pabloelmotos')

  return (
    <section className='tw-followCard-container'>

      <TwitterFollowCard {...aitor}> {/* Spread operator */}
        Aitor Job { /* Children */ }
      </TwitterFollowCard>

      <TwitterFollowCard username={username}>
        Terminator Bom { /* Children */ }
      </TwitterFollowCard>

      <button onClick={handleUsername}>
        Cambio de nombre
      </button>
    </section>
  )

}