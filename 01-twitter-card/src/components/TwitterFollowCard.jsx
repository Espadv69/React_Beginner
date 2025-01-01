import '../css/TwitterFollowCard.css'

export function TwitterFollowCard({ fullName, username, isFollowing }) {
  console.log(isFollowing)
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
          <span className='tw-followCard-span'>@{username}</span>
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
