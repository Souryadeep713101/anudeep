import React from 'react'
import {Link, Outlet} from "react-router-dom"
import { Navbar , Footer } from 'flowbite-react'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Home() {
  return (
   <>
    <Navbar
    fluid={true}
    rounded={true}
    className= "bg-lime-200 shadow-2xl"
   >
    <Navbar.Brand>
       <img width="130" height="200"
        src="https://www.anudip.org/wp-content/uploads/2018/07/logow.png"
       
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
  
    
  
  
         <Link to="/MentorCommitment">MentorCommitment</Link>
       </Navbar.Link>
  
  
       <Navbar.Link
       
        
       >
  
    
  
  
         <Link to="/about">About</Link>
       </Navbar.Link>
  
  
  
    </Navbar.Collapse>
  </Navbar>
    
    
      
      <div className='grow bg-gray-50 p-10'>
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
   
  </>
  )
}
