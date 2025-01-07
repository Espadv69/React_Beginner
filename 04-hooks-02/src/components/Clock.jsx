import { useState, useEffect } from 'react'

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
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}
