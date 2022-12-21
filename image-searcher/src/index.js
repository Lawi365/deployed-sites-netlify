import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// In this tut we look at how to interact with user inputs.

export default function index() {
  return (
    <div>
      <App />
    </div>
  )
}
ReactDOM.render(
  <App/>,document.querySelector("#root")
)