import React, { useContext }    from 'react'
import {Link, Outlet  , Navigate} from "react-router-dom"
import { Navbar} from 'flowbite-react'
import Footer from '../AnudipFooter';
import UserContext from '../../Context/UserContext';
export default function Landing() {
const  {loggedIn ,userDetails} = useContext(UserContext)
const userType = userDetails?.userDetails?.role_name;

console.log(loggedIn)
    
  return loggedIn && userType!=null ? userType==="trainer"?(<Navigate to="/Mentor" />) :userType==="mne" ?(<Navigate to="/Approver" />) : userType==="student" ?(<Navigate to="/Student" />) : userType ==="Centre Manager" ? (<Navigate to="/CentreManager" />) : (<Navigate to="/login" />)   : (<>  <Navbar
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


 <Footer/>
  </>)
    
}
