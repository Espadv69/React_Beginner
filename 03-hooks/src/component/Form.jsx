import { useState } from 'react'
import '../css/Components.css'

export const Form = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    console.log('render email')

    if (!value.includes('@') || !value.includes('.com')) {
      setError('Invalid Email')
    } else {
      setError('')
    }
  }

  return (
    <div>
      <h1 className="h1-title">Form</h1>
      <form className="form">
        <label className="label-form">Email:</label>
        <input
          className="input-form"
          type="text"
          value={email}
          onChange={handleEmailChange}
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
