import { useState } from 'react'


import './App.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
      <div className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className="navbar-right">
            <a href="#login">Login</a>
        </div>
    </div>



    </>
  )
}

export default App
