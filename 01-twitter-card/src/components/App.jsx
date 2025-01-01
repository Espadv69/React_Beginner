import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

  return (
    <section className='tw-followCard-container'>

      <TwitterFollowCard
        isFollowing
        fullName={'Espada diaz'}
        username={'aitor69'} />

      <TwitterFollowCard
        isFollowing
        fullName={'Domingo gonzalo'}
        username={'terminator'} />

      <TwitterFollowCard
        isFollowing
        fullName={'Paco salinas'}
        username={'salinas'} />

    </section>
  )

}