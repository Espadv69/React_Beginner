import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  return (
    <section className='tw-followCard-container'>
      <TwitterFollowCard isFollowing fName={'Espada diaz'} username={'aitor69'} />
      <TwitterFollowCard isFollowing fName={'Domingo gonzalo'} username={'terminator'} />
      <TwitterFollowCard isFollowing fName={'Paco salinas'} username={'salinas'} />
    </section>
  )
}