import React from 'react'
import './Hero.css'
import  image58 from './img/image58.png'

const Hero = () => {
  return (
    <>
      <section>
    <div className="container-fluid">
        <div className="row">
            <div className=" col-12 col-lg-12 hero-img">
               <img src={image58} alt="image here" className="img-fluid" />
            </div>
        </div>
    </div>
      </section>
    </>
  )
}

export default Hero
