import { useEffect, useState } from 'react'

import '../css/Components.css'

export const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('useEffect enabled:', enabled)
  }, [enabled])

  const handleButtonClick = () => {
    setEnabled(!enabled)
  }

  const classButton = () => {
    return enabled ? 'btn-follower' : 'btn-follower deactivated'
  }

  return (
    <div>
      <div className="ball-follower"></div>
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
