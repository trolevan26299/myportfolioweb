import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/avatar.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Le Van Tro</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scrool Down</a>
      </div>
    </header>
  )
}

export default Header