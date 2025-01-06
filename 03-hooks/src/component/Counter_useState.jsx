import { useState } from 'react'

import '../css/Components.css'

export const Counter_useState = () => {
  const [counter, setCounter] = useState(0)

  function sum() {
    setCounter(counter + 1)
  }

  function subtract() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1 className="h1-title">Counter useState</h1>
      <div className="container">
        <button onClick={sum} className="sum">
          Sum
        </button>
        <button onClick={subtract} className="subtract">
          Subtract
        </button>
      </div>
      <p className="counter-p">{counter}</p>
    </div>
  )
}
