import React, { useContext }    from 'react'
import {Link, Outlet  , Navigate} from "react-router-dom"
import { Navbar , Footer } from 'flowbite-react'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import UserContext from '../Context/UserContext';
export default function Landing() {
const  {loggedIn} = useContext(UserContext)


console.log(loggedIn)
    
  return loggedIn ? (<Navigate to="/Mentor" />) : (<>  <Navbar
    fluid={true}
    rounded={true}
    className= "bg-lime-200 shadow-xl relative z[1]"
   >
    <Navbar.Brand>
       <img width="100" height="200"
        src="https://www.anudip.org/wp-content/uploads/2018/07/logow.png"
       
        alt="Anudip Logo"
      />
      
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
     
     
      <Navbar.Link
      
        
      >
        <Link to="/">Signup</Link>
      </Navbar.Link>
  
      <Navbar.Link
       
        
       >
         <Link to="/login">Login</Link>
       </Navbar.Link>
 
  
    
  
  
       <Navbar.Link
       
        
       >
  
    
  
  
         <Link to="/About">About</Link>
       </Navbar.Link>
  
  
  
    </Navbar.Collapse>
  </Navbar>
    
    
      
      <div className='grow p-10 mid-container'>
      <Outlet />
      </div>


    <footer  className="flex justify-around p-10 bg-lime-200 shadow-xl">
      
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
      
   
    </div>


    

    </footer>
  </>)
    
}
