import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
// import ME from '../../clintenphoto-removebg-preview.png'
function Header() {
  return (
    <header>
      <div className="container header_container">
        <div className='animation'>
          <h5>Hello I'm </h5>
          <h1>Clinten Thimotheus</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          
        </div>
        <CTA />
          <HeaderSocials />
        {/* <div className="me">
          <img src={ME} alt="" style={{borderRadius:'10rem 10rem 0 0'}}/>
        </div> */}
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header