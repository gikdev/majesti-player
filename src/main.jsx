import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/app.component"
import "./assets/main.css"

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
