import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>TROLEVAN PORTFOLIO</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/levantro26299"><FaFacebookF/></a>
        <a href="https://www.instagram.com/tro_le_van/"><FiInstagram/></a>
        <a href="https://twitter.com/tro_lv"><IoLogoTwitter/></a>
      </div>
      
    </footer>
  )
}

export default Footer