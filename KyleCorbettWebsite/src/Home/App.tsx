import './App.css'
import { useState, useEffect } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

import { Route, Routes } from 'react-router-dom';
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
        <Route path="/" element={<HomeWithHeading />} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

  
      
      </div>
  
  


 </>



)



}

function HomeWithHeading() {
  return (
    <>

      <DelayedHeading />
    </>
  );
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
      <Link to="/" className="active">{navbar.Item1}</Link>
      <Link to="/about">{navbar.Item2}</Link>
      <Link to="/project">{navbar.Item3}</Link>
      <Link to="/contact">{navbar.Item4}</Link>
      <div className="navbar-right">
        <a href="#login">Login</a>
      </div>

     


    </div>
  );
}


export default App