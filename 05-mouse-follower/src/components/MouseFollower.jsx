import { useEffect, useState } from 'react'

export const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('MouseFollower mounted')
  }, [])

  return (
    <div>
      <h1>Mouse Follower</h1>
      <button>
        {enabled === false
          ? 'Enabled pointer follower'
          : 'Disable pointer follower'}
      </button>
    </div>
  )
}
