import { useEffect, useState } from 'react'
import '../css/Components.css'

export const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1 className="h1-title">Clock</h1>
      <div className="clock">
        <h2 className="h2-clock">{date.toLocaleTimeString()}</h2>
      </div>
    </div>
  )
}
