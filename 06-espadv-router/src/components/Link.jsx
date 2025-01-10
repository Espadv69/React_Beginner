import { EVENTS } from '../consts.js'

export function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Create a personalized event
  const navEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {
    e.preventDefault()
    navigateTo(to)
  }

  return (
    <a
      className="a-spa"
      onClick={handleClick}
      href={to}
      target={target}
      {...props}
    />
  )
}
