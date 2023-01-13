import React from 'react'
import emp3 from './img/emp3.png';
import './Employement4.css'

function Employement4() {
  return (
    <>
      <section>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="employement-main-heading  text-center">
                    Personal Care Attendant (PCA) Program
                    </h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <h4 className="main-sub-heading  justify-content-start">
                    Interested in a nursing career?
                     NO PRIOR EXPERIENCE REQUIRED
                    </h4>
                    <p className="emp-para justify-content-start">
                    Paid on-the-job training
                    Start your nursing career as a Personal Care Attendant (PCA).
                    Become a Certified Nurses Aide (CNA) in 4 months, no additional classes needed!
                    Starting at $15/hr, increase to $17 upon CNA certification
                    Tuition assistance available for LPN/RN classes
                    Full benefits, health/dental insurance, free life insurance, monthly rent raffle
                    </p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <img src={emp3} alt=""  className="img-fluid" />
                </div>
            </div>
            <div className="row m-5">
                  <div className="col-md-10">
               <h1 className="Content1-main-haeding">
               Call Our Friendly Human Resources Team Today!
                </h1>  
            </div>
            <div className="col-md-2 d-flex"> 
                <button type="button " className="btn text-white">Call Us Today</button>   
            </div> 
        </div>
        </div>
      </section>
    </>
  )
}

export default Employement4
