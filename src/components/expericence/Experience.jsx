import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
          <div className="experience_ui">
              <h3>UI/UX Designer</h3>
              <div className="experience_content">
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>Figma</h4>
                        <small>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>Adobe XD</h4>
                        <small>Intermediate</small>
                      </div>
                  </article>
              </div>
          </div>
          <div className="experience_frontend">
              <h3>Frontend Developer</h3>
              <div className="experience_content">
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>HTML</h4>
                        <small>Experienced</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>CSS</h4>
                        <small>Experienced</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>Javascript</h4>
                        <small>Experienced</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>ReactJS</h4>
                        <small>Experienced</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>Bootstrap & Ant</h4>
                        <small>Experienced</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>Taiwind</h4>
                        <small>Experienced</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>SASS</h4>
                        <small>Experienced</small>
                      </div>
                  </article>
              </div>
          </div>
          <div className="experience_backend">
              <h3>Backend Developer</h3>
              <div className="experience_content">
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                          <h4>NodeJS</h4>
                          <small>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                        <h4>MongoDB</h4>
                        <small>Intermediate</small>
                      </div>
                  </article>
              </div>
          </div>
        </div>      
    </section>
  )
}

export default Experience