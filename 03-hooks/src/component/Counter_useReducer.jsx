import { useReducer } from 'react'
import '../css/Components.css'

export const Counter_useReducer = () => {
  return (
    <div>
      <h1 className="h1-title">Counter useReducer</h1>
      <p className="p-counter"></p>
      <div className='buttons-container'>
        <button className='btn'>Increment</button>
        <button className='btn'>Decrement</button>
        <button className='btn'>Reset</button>
      </div>
    </div>
  )
}
