import React, { useState } from 'react'
import CV from '../../CLINTEN.pdf'
function CTA() {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')}  className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

export default CTA