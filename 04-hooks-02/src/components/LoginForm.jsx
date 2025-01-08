import { useState } from 'react'

export const LoginForm = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    if (user !== '' && password !== '') {
      event.preventDefault()
      alert(`User: (${user}) Password: (${password})`)
      setUser('')
      setPassword('')
    } else {
      event.preventDefault()
      alert('Empty input(s)')
    }
  }

  return (
    <div>
      <h1 className="h1-title">Login-Form</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          className="input-form-login"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Write a username"
        />
        <input
          className="input-form-login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Write a password"
        />
        <button className="button-form-login">Submit</button>
      </form>
    </div>
  )
}
