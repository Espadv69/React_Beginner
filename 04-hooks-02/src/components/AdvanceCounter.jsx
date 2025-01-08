import { useReducer } from "react"

const initialCounter = { count: 0 }

const calculator = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialCounter
    default:
      throw new Error('Unknow type action')
  }
}

export const AdvanceCounter = () => {
  const [state, dispatch] = useReducer(calculator, initialCounter)

  const handleIncrement = () => {
    dispatch({ type: 'increment' })
  }

  const handleDecrement = () => {
    dispatch({ type: 'decrement' })
  }

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <div>
      <h1 className="h1-title">Advance Counter</h1>
      <p className="p-counter">{state.count}</p>
      <div className="buttons-container">
        <button type="button" className="btn-counter" onClick={handleIncrement}>Increment</button>
        <button type="button" className="btn-counter" onClick={handleDecrement}>Decrement</button>
        <button type="button" className="btn-counter" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
