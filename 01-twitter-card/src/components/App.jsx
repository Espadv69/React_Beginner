import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  // We can pass the props in the same way as we did in the previous example.
  const aitor = { username: 'aitor69', isFollowing: true}

  return (
    <section className='tw-followCard-container'>

      <TwitterFollowCard {...aitor}> {/* Spread operator */}
        Aitor Job { /* Children */ }
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing username={'terminator'}>
        Terminator Bom { /* Children */ }
      </TwitterFollowCard>

    </section>
  )

}