import '../css/TwitterFollowCard.css'

export function TwitterFollowCard({ children, username, isFollowing }) {
  // const addAt = (username) => `@${username}` // Add @ to the username, but there are other ways to do it

  // Conditional rendering
  const text = isFollowing ? 'Following' : 'Follow'
  const classButton = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${username}`}
          alt="Avatar"
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-span'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className={classButton}>
          {text}
        </button>
      </aside>
    </article>
  )
  
}
