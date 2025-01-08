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

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  )
}
