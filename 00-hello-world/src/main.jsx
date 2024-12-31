import React from 'react'
import ReactDom from 'react-dom'

const root = ReactDom.createRoot(document.getElementById('root'))

const createButton = ({ text }) => {
  return(
    <button>{ text }</button>
  )
}

root.render(
  <React.StrictMode>
    {createButton({ text: 'button 1'})}
    {createButton({ text: 'button 2'})}
    {createButton({ text: 'button 3'})}
  </React.StrictMode>
)
