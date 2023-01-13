import React from 'react'
import emp1 from './img/emp1.png'
import './Employement1.css'

function Employement1() {
  return (
    <>


    <div className="container-fluid">
       <div className="row">
            <div className="col-md-12">
              <img src={emp1} alt=" About image" className="img img-fluid"/>
            </div>
        </div>
        <div className="row mb-5 mt-5 text-center  justify-content-center">
          <div className="col-md-10">
              <h1 className="display-2 mt-5 text-center">Do You Want to Work Somewhere</h1>
            <div>
              <span className="heading_2">Meaningful?  <span> <a className="btn4" href="">CURRENT OPENINGS</a> </span></span>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
export default Employement1