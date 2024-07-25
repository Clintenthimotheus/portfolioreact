import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'
function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/clinten-thimotheus/"target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/Clintenthimotheus"target='_blank'><FaGithub/></a>
      <a href="https://app.netlify.com/teams/clintenthimotheus/overview"target='_blank'><SiNetlify/></a>
    </div>
  )
}

export default HeaderSocials