import { useEffect, useState } from 'react'

import '../css/Components.css'

export const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('useEffect enabled:', enabled)

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      console.log('clientX:', clientX, 'clientY:', clientY)
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove)
    }
  }, [enabled])

  const handleButtonClick = () => {
    setEnabled(!enabled)
  }

  const classButton = () => {
    return enabled ? 'btn-follower' : 'btn-follower deactivated'
  }

  return (
    <div>
      <div
        className="ball-follower"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <h1>Mouse Follower</h1>
      <button
        type="button"
        onClick={handleButtonClick}
        className={classButton()}
      >
        {enabled ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  )
}
