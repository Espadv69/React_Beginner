import { useEffect, useState } from 'react'

import '../css/Components.css'

export const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('MouseFollower mounted')
  }, [])

  const handleButtonClick = () => {
    setEnabled(!enabled)
  }

  const classButton = () => {
    return enabled ? 'btn-follower' : 'btn-follower deactivated'
  }

  return (
    <div>
      <h1>Mouse Follower</h1>
      <button onClick={handleButtonClick} className={classButton()}>
        {enabled ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  )
}
