import { useState, useEffect } from 'react'

import '../css/Components.css'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const intervalSeconds = isActive
      ? setInterval(() => {
          setSeconds((s) => s + 1)
        }, 1000)
      : null

    return () => clearInterval(intervalSeconds)
  }, [isActive])

  const handlePause = () => {
    setIsActive(!isActive)
  }

  const handleReset = () => {
    setIsActive(true)
    setSeconds(0)
  }

  return (
    <div>
      <p className="p-timer">{seconds}</p>
      <div className="btns-timer">
        <button className="btn-timer" onClick={handlePause}>
          {isActive ? 'Pause' : 'Resume'}
        </button>
        <button className="btn-timer" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}
