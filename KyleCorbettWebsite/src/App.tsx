import './App.css'
import { useState, useEffect } from 'react'





function DelayedHeading() {
  // State to control the visibility of the <h1> tag
  const [showHeading, setShowHeading] = useState(false);
  const [showHeading2, setShowHeading2] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowHeading2(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowHeading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container'>
        <h1 className={`fade-in ${showHeading ? 'visible' : ''}`}>Welcome</h1>
       <h1 className={`fade-in ${showHeading2 ? 'visible' : ''}`}>I hope you enjoy</h1>
    </div>
  );

}


function App() {

  
return (
  <>
  
  <div className='bcontainer'>

  

  <div>

    <Navbar />

  </div>
  

  <div>

  <DelayedHeading/>


  </div>
    

  </div>
    </>



)



}


function Navbar ()
{

    const navbar ={

        Item1: "Home",
        Item2: "About",
        Item3: "Projects",
        Item4: "Contact"
      
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
        </div>
    
        </>
      
    )
}


export default App