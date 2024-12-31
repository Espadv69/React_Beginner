import React from 'react'
import ReactDom from 'react-dom'

const root = ReactDom.createRoot(document.getElementById('root'))

// This is a simple function. It's imperative because it's telling the computer how to do something.
const createButton = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  )
}

// This is a simple component. It's declarative because it's telling the compute what to do.
const Button = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  )
}

root.render(
  <React.StrictMode> {/* This is a wrapper that helps with debugging */}

    {createButton({ text: 'button 1' })} {/* Imperative */}
    <Button text='button 2' /> {/* Declarative */}

  </React.StrictMode>
)
