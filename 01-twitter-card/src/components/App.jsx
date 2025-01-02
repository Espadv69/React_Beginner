import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  // We can pass the props in the same way as we did in the previous example.
  const aitor = { username: 'aitor69', initialIsFollowing: true } // Bad practice

  const [username, setUsername] = useState('terminator._')
  const handleUsername = () => setUsername('pabloelmotos')
  console.log('render with: ', username)

  const users = [
    {
      username: 'manolito',
      name: 'Manolo',
      isFollowing: false
    },
    {
      username: 'pepito',
      name: 'Pepe',
      isFollowing: true
    },
    {
      username: 'jorgito',
      name: 'Jorge',
      isFollowing: true
    }
  ]

  return (
    <section className='tw-followCard-container'>

      <TwitterFollowCard {...aitor}> {/* Spread operator */}
        Aitor Job { /* Children */}
      </TwitterFollowCard>

      {
        users.map(user => {
          const { username, name, isFollowing } = user
          return (
            <TwitterFollowCard key={username} username={username} initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }

    </section>
  )

}