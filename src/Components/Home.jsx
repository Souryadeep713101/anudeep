import React from 'react'
import {Link, Outlet} from "react-router-dom"
import { Navbar } from 'flowbite-react'

export default function Home() {
  return (
   <>
    <Navbar
    fluid={true}
    rounded={true}
  >
    <Navbar.Brand>
       <img width="130" height="200"
        src="https://www.anudip.org/wp-content/uploads/2018/07/logow.png"
        className=""
        alt="Flowbite Logo"
      />
      
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
     
     
      <Navbar.Link
       
        
      >
        <Link to="/">Programme View</Link>
      </Navbar.Link>
  
      <Navbar.Link
       
        
       >
         <Link to="/login">Login</Link>
       </Navbar.Link>
   
  
  
  
       <Navbar.Link
       
        
       >
  
    
  
  
         <Link to="/about">About</Link>
       </Navbar.Link>
  
  
  
    </Navbar.Collapse>
  </Navbar>
    
    
      
      
      <Outlet />
  </>
  )
}
