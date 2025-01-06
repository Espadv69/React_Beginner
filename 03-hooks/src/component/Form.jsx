import { useState } from 'react'
import '../css/Components.css'

export const Form = () => {
  const [email, setEmail] = useState('') // handle input changes
  const [error, setError] = useState('') // handle error input

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    console.log('render input email')

    if (!value.includes('@') || !value.includes('.com')) {
      setError('Invalid input. Required: (@) and (.com)')
    } else {
      setError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Email: ${email}`)
    setEmail('')
  }

  // HTML structure
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label-form">Email</label>
        <input
          type="text"
          className="input-form"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="button-form"
          type="submit"
          disabled={error !== '' || email === ''}
        >
          Submit
        </button>
      </form>
      {error && <p className="error-form">{error}</p>}
    </div>
  )
}
