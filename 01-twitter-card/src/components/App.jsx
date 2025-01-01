import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  const format = (username) => `@${username}`

  return (
    <section className='tw-followCard-container'>

      <TwitterFollowCard
        isFollowing
        fullName={'Espada diaz'}
        username={'aitor69'}
        formatUsername={format} />

      <TwitterFollowCard
        isFollowing
        fullName={'Domingo gonzalo'}
        username={'terminator'}
        formatUsername={format} />

      <TwitterFollowCard
        isFollowing
        fullName={'Paco salinas'}
        username={'salinas'}
        formatUsername={format} />

    </section>
  )
}