import { useState, useEffect } from 'react'

import '../css/Components.css'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(true)

  return (
    <div>
      <p className="p-timer">{}</p>
      <div className="btns-timer">
        <button className="btn-timer">{}</button>
        <button className="btn-timer">Reset</button>
      </div>
    </div>
  )
}
