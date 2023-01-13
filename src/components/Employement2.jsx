import React from 'react'
import em_logo from './img/em_logo.png';
import './Employement2.css'

function Employement2() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-2  d-flex">
            <h1 className="heading_2 justify-content-start d-flex">JOIN</h1>
            </div>
            <div className="col-md-10  d-flex">
            <p className="em pt-3 px-2">our wonderful team of caregivers on  <br /> our mission a </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 d-flex">
            <h1 className="heading_21 justify-content-start d-flex ">DELIVERING</h1>
            </div>
            <div className="col-md-10 d-flex">
            <p className="emp_2 d-flex">excellent care, and quality of life to our<br />current and future Residents</p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 text-center">
            <img src={em_logo} alt="" className="img img-fluid" />
        </div>
        {/* <div className="col-md-5"></div> */}
      </div>
    </div>
    </>
  )
}
export default Employement2