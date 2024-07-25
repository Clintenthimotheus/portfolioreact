import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'
function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Angular</h3>
            </div>
              <ul className='service_list'>
                <li>
                <AiOutlineCheck className='service_list-icon'/>
                <p>
                Angular is an open-source web application framework developed and maintained by Google. It is used for building dynamic and robust web applications. Angular offers a comprehensive set of features and tools.
                Angular is written in TypeScript, a superset of JavaScript. TypeScript adds static typing and other features to JavaScript, making it easier to develop and maintain large-scale applications.
                </p>
                </li>
              </ul>
            
          
        </article>
        {/* END OD UI/UX */}
        <article className='service'>
          <div className="service_head">
            <h3>REACT</h3>
            </div>
              <ul className='service_list'>
                <li>
                <AiOutlineCheck className='service_list-icon'/>
                <p>
                I possess a solid command of React,a popular JavaScript library for building user interfaces. With React, 
                I can efficiently develop interactive and responsive web applications that provide seamless user experiences. 
                My expertise in React enables me to create components, 
                and optimize performance,ensuring that the applications I work on are both powerful and user-friendly.
                </p>
                </li>
              </ul>
            
          
        </article>
{/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service_head">
            <h3>JAVASCRIPT</h3>
            </div>
              <ul className='service_list'>
                <li>
                <AiOutlineCheck className='service_list-icon'/>
                <p>
                I have a strong understanding of JavaScript, a versatile and widely-used programming language for web development.
                 JavaScript powers dynamic and interactive web applications, and I am proficient in writing and implementing JavaScript code to create these engaging user experiences.
                 Whether it's enhancing the functionality of websites or building web applications from scratch. 
                </p>
                </li>
              </ul>
            
          
        </article>

      </div>
    </section>
  )
}

export default Services