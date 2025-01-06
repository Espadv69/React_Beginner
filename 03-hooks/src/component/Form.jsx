import { useState } from 'react'
import '../css/Components.css'

export const Form = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  return (
    <div>
      <h1 className="h1-title">Form</h1>
      <form className="form">
        <label className="label-form">Email:</label>
        <input
          className="input-form"
          type="text"
        />
        <button
          className="button-form"
          type="submit"
        >
          Submit
        </button>
      </form>
      {/* todo: error message */}
    </div>
  )
}
