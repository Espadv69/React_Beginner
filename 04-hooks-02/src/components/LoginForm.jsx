import { useState } from 'react'

export const LoginForm = () => {
  return (
    <div>
      <h1 className="h1-title">Login-Form</h1>
      <form className="form-login">
        <input className="input-form-login" type="text" />
        <input className="input-form-login" type="text" />
        <button className="button-form-login">Submit</button>
      </form>
    </div>
  )
}
