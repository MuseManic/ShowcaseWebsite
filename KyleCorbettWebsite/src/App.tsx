import { useState } from 'react'


import './App.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  const navbar ={

    Item1: "Home",
    Item2: "About",
    Item3: "Projects",
    Item4: "Contact"
  
  }

  const welcome = {

      letter1: "W",
      letter2: "E",
      letter3: "L",
      letter4: "C",
      letter5: "O",
      letter6: "M",
      letter7: "E"

  }

  return (
    <>
    <div>
      <div className="navbar">
        <a href="#home" className="active">{navbar.Item1}</a>
        <a href="#about">{navbar.Item2}</a>
        <a href="#projects">{navbar.Item3}</a>
        <a href="#contact">{navbar.Item4}</a>
        <div className="navbar-right">
            <a href="#login">Login</a>
        </div>



    </div>
    <h1>{welcome.letter1}</h1>
    <h1>{welcome.letter2}</h1> 
    <h1>{welcome.letter3}</h1>
    <h1>{welcome.letter4}</h1>
    <h1>{welcome.letter5}</h1>
    <h1>{welcome.letter6}</h1>
    <h1>{welcome.letter7}</h1>


    </div>

    </>

    



  
)




}

export default App
