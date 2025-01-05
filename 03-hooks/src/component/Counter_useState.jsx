import { useState } from 'react'

export const Counter_useState = () => {
  const [counter, setCounter] = useState(0)

  function sum() {
    setCounter(counter + 1)
  }

  function subtract() {
    setCounter(counter - 1)
  }

  return (
    <>
      <div className="container">
        <button onClick={sum}>Sum</button>
        <button onClick={subtract}>Subtract</button>
      </div>
    </>
  )
}
