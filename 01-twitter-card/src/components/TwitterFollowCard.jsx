import '../css/TwitterFollowCard.css'

export function TwitterFollowCard({ fullName, username, formatUsername, isFollowing }) {
  // const addAt = (username) => `@${username}` // Add @ to the username, but there are other ways to do it
  
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${username}`}
          alt="Avatar"
        />
        <div className='tw-followCard-info'>
          <strong>{fullName}</strong>
          <span className='tw-followCard-span'>{formatUsername(username)}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Follow
        </button>
      </aside>
    </article>
  )
}
