import React from 'react'
import location from './img/location.png';
import mail from './img/mail.png';
import icon from './img/icon.png'
import './Findus.css'


function Findus() {
  return (
    <>
      <section>
        <div className="container mt-5">
            <div className="row text-center">
              
                <div className="col-md-4 justify-content-center">
                    <a href="" className=""><img src={location} alt="" className="img-fluid" /></a>
                    <p className= "cont">5860 College Road, <br/>
                    Key West, FL 33040</p>
                </div>
               
                <div className="col-md-4 justify-content-center">
                    <a href="" className=""><img src={mail} alt="" className="img-fluid" /></a>
                    <p className= "cont">info@plamvista.com</p>
                </div>
               
                <div className="col-md-4 justify-content-center">
                    <a href="" className=""><img src={icon} alt="" className="img-fluid" /></a>
                    <p className= "cont">+1.305.296.4888</p>  
                </div>
               
            </div>
        </div>
      </section>
    </>
  )
}

export default Findus
