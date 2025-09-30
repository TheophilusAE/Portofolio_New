import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import EmailJS test for development
if (import.meta.env.DEV) {
  import('./test-emailjs.js');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)