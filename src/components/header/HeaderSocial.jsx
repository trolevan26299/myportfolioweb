import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        
        <a href="https://github.com/trolevan26299" target='_blank'><FaGithub/> </a>
        <a href="https://www.behance.net/trl30" target='_blank'><FaBehance/></a>
    </div>
  )
}

export default HeaderSocial