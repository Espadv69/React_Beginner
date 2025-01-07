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
    setSeconds(0)
    setIsActive(true)
  }
  
  const classButtonPause = () => {
    return isActive ? 'btn-timer' : 'btn-timer btn-false'
  }

  return (
    <div>
      <h1 className="h1-title">Timer</h1>
      <p className="p-timer">{seconds}</p>
      <div className="btns-timer">
        <button className={classButtonPause()} onClick={handlePause}>
          {isActive ? 'Pause' : 'Resume'}
        </button>
        <button className="btn-timer" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}
