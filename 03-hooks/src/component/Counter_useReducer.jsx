import { useReducer } from 'react'
import '../css/Components.css'

const initialCounter = { count: 0 }

const counter = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1}
    case ' reset':
      return initialCounter
    default:
      throw new Error('Unknow action')
  }
}

export const Counter_useReducer = () => {
  const [state, dispatch] = useReducer(counter, initialCounter)

  return (
    <div>
      <h1 className="h1-title">Counter useReducer</h1>
      <p className="p-counter">{state.count}</p>
      <div className='buttons-container'>
        <button className='btn'>Increment</button>
        <button className='btn'>Decrement</button>
        <button className='btn'>Reset</button>
      </div>
    </div>
  )
}
