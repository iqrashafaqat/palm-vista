import React from 'react'
import Rectangle78 from './img/Rectangle78.png';
import Clipgroup from './img/Clipgroup.png';
import Group1 from './img/Group1.png';
import  './Dedicationsection.css'

function Dedicationsection() {
  return (
    <>
      <section  className="main-section">
        <div className="container">
            <div className="row mt-5 d-flex">
                <div className="col-md-6 main-left-heading  d-flex justify-content-center flex-column align-items-start">
                <h1 className="display-2 First-heading">Dedicated To Your Recovery</h1>
                <p  className="left-para text-left">Our therapy professionals develop custom 
                treatment plans for each resident they are serving.
                Those requiring short-term rehabilitation can
                 utilize our private suites as they recover.
                </p>
                {/* <form className="d-flex"> */}
                <button className="btn mt-5" type="submit">Contact Us</button>
                {/* </form> */}
                </div>
                <div className="col-md-6 d-flex">
                  <div className="mt-5">
                    <img src={Rectangle78} alt="image here" className=" img img-fluid " />
                  </div>
                  <div className="px-1 pb-3 mb-5">
                    <img src={Clipgroup} alt="image here" className=" img img-fluid" />
                    </div>
                    <div className="mt-5">
                    <img src={Group1} alt="image here" className="img img-fluid" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Dedicationsection
