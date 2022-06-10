import React from 'react'
import './about.css'
import ME from '../../assets/avatar2.jpg'
import{FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image" style={{width:'100%'}}>
              <img src={ME} alt="About image" />
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Year Working</small>
          </article>
          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>10+ Worldwide</small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
          </div>
          <p>
          I am a web developer. With nearly 2 years of experience in the industry, I have done many projects for companies around the world. If you want me to design a website for you, please contact me at the "Let Talk" button below so we can work together.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About