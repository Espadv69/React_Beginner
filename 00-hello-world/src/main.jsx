import React from 'react'
import ReactDom from 'react-dom'

const root = ReactDom.createRoot(document.getElementById('root'))

const createButton = ({ text }) => {
  return(
    <button>{ text }</button> // This is a simple function.
  )
}

const Button = ({ text }) => {
  return(
    <button>{ text }</button>
  )
}

root.render(
  <React.StrictMode>
    
    {createButton({ text: 'button 1'})} {/* Imperative */}
    <Button text='button 2' /> {/* Declarative */}

  </React.StrictMode>
)
