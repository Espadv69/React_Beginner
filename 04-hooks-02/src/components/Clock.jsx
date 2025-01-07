import { useState, useEffect } from 'react'

import '../css/Components.css'

export const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalTime)
  }, [])

  return (
    <div className="clock">
      <p className="p-clock">{date.toLocaleTimeString()}</p>
    </div>
  )
}
