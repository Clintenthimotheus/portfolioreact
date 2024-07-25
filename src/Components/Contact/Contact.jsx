import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
const form=useRef()
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_n0lsgsp', 'template_mavf2c4', form.current, '0kIuo8FOF9Ir9vOF1')
  alert("Message send")
    e.target.reset()
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon'/>
               <h4>Email</h4>
               <h5>clintenthimotheus@gmail.com</h5>
               <a href="https://mail.google.com/" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsInstagram className='contact_option-icon'/>
               <h4>Instagram</h4>
               <h5>CLINTEN</h5>
               <a href="https://www.instagram.com/the__night__mare/" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
               <h4>WhatsApp</h4>
               <h5>8113852280</h5>
               <a href="https://api.whatsapp.com/send?phone=8113852280" target='_blank'>Send a message</a>
          </article>
          </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact