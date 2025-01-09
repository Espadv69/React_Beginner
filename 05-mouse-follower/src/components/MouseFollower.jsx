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

  return (
    <div>
      <h1>Mouse Follower</h1>
      <button onClick={handleButtonClick} className='btn-follower'>
        {enabled ? 'Disable pointer follower' : 'Enabled pointer follower'}
      </button>
    </div>
  )
}
