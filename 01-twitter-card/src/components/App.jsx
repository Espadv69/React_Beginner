import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  const formatUsername = (username) => `@${username}`
  return (
    <section className='tw-followCard-container'>
      <TwitterFollowCard isFollowing fullName={'Espada diaz'} username={'aitor69'} formatUsername={formatUsername} />
      <TwitterFollowCard isFollowing fullName={'Domingo gonzalo'} username={'terminator'} formatUsername={formatUsername} />
      <TwitterFollowCard isFollowing fullName={'Paco salinas'} username={'salinas'} formatUsername={formatUsername} />
    </section>
  )
}