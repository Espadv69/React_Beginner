import '../css/TwitterFollowCard.css'

export function TwitterFollowCard() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src="https://unavatar.io/pepe"
          alt="Avatar"
        />
        <div className='tw-followCard-info'>
          <strong>Pepe Villuela</strong>
          <span className='tw-followCard-span'>@pepe80</span>
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
