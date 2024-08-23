import './App.css'
import { useState, useEffect } from 'react'
import About from '../About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';






function DelayedHeading() {
  // State to control the visibility of the <h1> tag
  const [showHeading, setShowHeading] = useState(false);
  const [showHeading2, setShowHeading2] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowHeading2(true); }, 5000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    
    const timer = setTimeout(() => { setShowHeading(true);}, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className='container'>
        <h1 className={`fade-in ${showHeading ? 'visible' : ''}`}>Welcome</h1>

    </div>
    <div className='container'>
       <h1 className={`fade-in ${showHeading2 ? 'visible' : ''}`}>I hope you enjoy</h1>
    </div>

    </>
  )

}





function App() {

  
return (
  <>


    
      <div className='bcontainer'>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
        <DelayedHeading />
      </div>
  
  


 </>



)



}


function Navbar() {
  const navbar = {
    Item1: "Home",
    Item2: "About",
    Item3: "Projects",
    Item4: "Contact",
  };

  return (
    <div className="navbar">
      <Link to="/home" className="active">{navbar.Item1}</Link>
      <Link to="/about">{navbar.Item2}</Link>
      <a href="#project">{navbar.Item3}</a>
      <a href="#contact">{navbar.Item4}</a>
      <div className="navbar-right">
        <a href="#login">Login</a>
      </div>
    </div>
  );
}


export default App