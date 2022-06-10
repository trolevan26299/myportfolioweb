import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {SiTwitter} from 'react-icons/si'
import{ useRef } from 'react';
import emailjs from 'emailjs-com';


const  Contact=()=> {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lx9e8nx', 'template_4mkkuvt', form.current, 'ocTb5JzKkZRnw1-v6')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
                <MdOutlineEmail className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>trolevan26299@gmail.com</h5>
                <a href="mailto:trolevan26299@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className="contact_option">
                <SiTwitter className='contact_option-icon'/>
                <h4>Twitter</h4>
                <h5>tro_lv</h5>
                <a href="https://twitter.com/messages/1385083618892992512-1452166756408041479"target='_blank' >Send a message</a>
            </article>
            <article className="contact_option">
                <RiMessengerLine className='contact_option-icon'/>
                <h4>Messenger</h4>
                <h5>levantro26299</h5>
                <a href="https://m.me/levantro26299" target='_blank'>Send a message</a>
            </article>
           
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email"name='email' placeholder='Your Email' required />
            <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
