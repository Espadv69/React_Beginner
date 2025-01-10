import { EVENTS } from '../consts.js'

export function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Create a personalized event
  const navEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {}

  return <a onClick={handleClick}></a>
}
