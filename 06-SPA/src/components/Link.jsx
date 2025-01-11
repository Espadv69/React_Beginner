import { EVENTS, BUTTONS } from '../consts.js'

export function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Create a personalized event
  const navEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === BUTTONS.primary
    const isModifiedEvent =
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented
    const isManagableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManagableEvent && !isModifiedEvent) {
      e.preventDefault()
      navigateTo(to)
    }
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
