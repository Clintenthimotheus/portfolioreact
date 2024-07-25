import React from 'react'
import './Portfolio.css'
import IMG1 from '../../IMG1.png'
import IMG2 from '../../IMG2.png'
import IMG3 from '../../IMG3.png'
import IMG4 from '../../IMG4.png'
import IMG5 from '../../IMG5.png'
import IMG6 from '../../IMG6.png'
import IMG7 from '../../IMG7.png'
import IMG8 from '../../IMG8.png'
import IMG9 from '../../IMG9.png'
import IMG10 from '../../IMG10.png'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent WOrk</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>My Book Gallery</h3>
           <div  className="portfolio_item-cta">
           <a href="https://github.com/Clintenthimotheus" className='btn' target='_blank'>Github</a>
            <a href="https://mybookgallery.netlify.app/" className='btn btn-primary'>Live Demo</a>
           </div>
         
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img  src={IMG2} alt="" />
          </div>
            <h3>Loremipsum shopping</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus" className='btn' target='_blank'>Github</a>
            <a href="https://loremipsumshopping.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img  src={IMG3} alt="" />
          </div>
            <h3>Clintencoffeepage</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus" className='btn' target='_blank'>Github</a>
            <a href="https://clintencoffeepage.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4}  alt="" />
          </div>
            <h3>Sachin portfolio</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus" className='btn' target='_blank'>Github</a>
            <a href="https://sachinport.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5}  alt="" />
          </div>
            <h3>Luminar</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus" className='btn' target='_blank'>Github</a>
            <a href="https://lumlab.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6}  alt="" />
          </div>
            <h3>Travellingpage</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus" className='btn' target='_blank'>Github</a>
            <a href="https://clintenthimotheus.github.io/travellingpage/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG7}  alt="" />
          </div>
            <h3>Calculator</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus/calculator" className='btn' target='_blank'>Github</a>
            <a href="https://calculator-machine.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img  src={IMG8} alt="" />
          </div>
            <h3>Budget Calculator</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus/Budget-Calculator-Js" className='btn' target='_blank'>Github</a>
            <a href="https://6530fe1e7d818f0b18467610--clintenbudgetcalculator.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img  src={IMG9} alt="" />
          </div>
            <h3>Weather App</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus/findweatherapp-js" className='btn' target='_blank'>Github</a>
            <a href="https://findweatherapp-js.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG10} alt="" />
          </div>
            <h3>Product App</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Clintenthimotheus/product-finder-angular" className='btn' target='_blank'>Github</a>
            <a href="https://product-finder-angular.netlify.app/mainpage" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio