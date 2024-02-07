import React    from 'react'
import {Link, Outlet } from "react-router-dom"
import { Navbar} from 'flowbite-react'
import Footer from '../AnudipFooter';
import UserAvatarButton from '../UserAvatarButton';
export default function Approver() {
   return  <>
    <Navbar
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
    <Navbar.Collapse  className='[&>*]:items-center'>
     
    

      <Navbar.Link>

      <Link to="/">Approve</Link>
       </Navbar.Link>





  
       <Navbar.Link>
       <Link to="About">About</Link>
       </Navbar.Link>
      
      <li><UserAvatarButton /></li>
       
  
    </Navbar.Collapse>

    
  </Navbar>
  
    
      
      <div className='grow p-10 mid-container'>
      <Outlet />
      </div>


   <Footer/>
   
  </>

}
