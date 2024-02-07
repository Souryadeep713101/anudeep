import React from 'react'
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsYoutube, BsInstagram, BsTwitter , BsLinkedin , BsSpotify } from 'react-icons/bs';

function AnudipFooter() {
  return (
   
<footer  className="flex justify-around p-10 bg-lime-200 shadow-xl">
    
    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          
          <Footer.Icon  target='_blank' href="https://www.facebook.com/AnudipFoundation/" icon={BsFacebook} />
          <Footer.Icon target='_blank' href="https://www.instagram.com/anudipfoundation/" icon={BsInstagram} />
          <Footer.Icon  target='_blank' href="https://twitter.com/AnudipF" icon={BsTwitter} />
          <Footer.Icon target='_blank' href="https://www.youtube.com/c/AnudipFoundation2007" icon={BsYoutube} />
          <Footer.Icon  target='_blank' href="https://www.linkedin.com/company/anudip-foundation-for-social-welfare/?viewAsMember=true" icon={BsLinkedin} />
          <Footer.Icon target='_blank' href="https://open.spotify.com/user/hjwxlu2yo64f8im74fgxdouu8?si=b4gy_kHKRkWtfh9bXE7SrA&utm_source=copy-link&nd=1&dlsi=a3dcad19b0764504" icon={BsSpotify} />
    
    </div>
    
    
    
    
    </footer>
  )
}

export default AnudipFooter
