import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
      <article className='service'>
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Website interface design</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Application interface design</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Support UX research for the system to increase the customer experience on your application</p>
          </li>
        </ul>
      </article>
      <article className='service'>
        <div className="service_head">
          <h3>Web Development</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Frontend Developer with ReactJS</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Design a simple website using ReactJS,NodeJS and MongoDB</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Designing applications running on iOS and Android operating systems (Fresher)</p>
          </li>
          
        </ul>
      </article>
      </div>
    </section>
  )
}

export default Services