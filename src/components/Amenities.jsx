import React from 'react';
import offer4 from './img/offer4.png';
import Line from './img/Line.png';
import './Amenities.css'

function Amenities() {
  return (
    <>
      <section>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h1 className="main-heading text-center">AMENITIES</h1>
                    </div>
            </div>
                <div className="row">
                   <div className="col-md-2"></div>
                     <div className="col-md-8 text-center">
                      <p className="main-para ">
                          The strong family feel and upbeat atmosphere in each facility are testimony to the attention to detail that goes into planning every day.
                          You deserve a lifestyle you can be proud of.
                      </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
    <div className="row mt-5 ">
       <div className="col-md-4">
          <img src={offer4} alt="" className="img-fluid" />
       </div>
       <div className="col-md-8 amenities-r">
        <h2 className="main-heading text-center">
       <span className="amenities-h">OUR</span>  AMENITIES <span className="amenities-h">INCLUDE</span>
        </h2>
        <div className="row mx-5">
            <div className="col-md-6 ">
          
            <ul className="list-unstyled">
                                <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                                <b>Well-Appointed Private</b>
                                <p className="para mx-5">and Semi-Private Rooms</p>
                               
                                </li>
                                <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                                <b>Complimentary Cable</b> 
                                <p className="para  mx-5">
                                & Wi-Fi
                                </p></li>
                                <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                                <b>Gourmet Meals</b> 
                                <p className="para mx-5">
                                & Snacks
                                </p></li>
                                <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                                <b>Resident Council</b><br/>
                                </li>
                               
                    </ul>

            </div>
            <div className="col-md-6 ">
          
          <ul className="list-unstyled">
                              <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                              <b>Stimulating Recreation</b>
                              <p className="para mx-5">
                              Program
                              </p>
                              </li>
                              <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                              <b>Housekeeping</b>
                              <p className="para mx-5">
                              & Laundry
                              </p></li>
                              <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                              <b>Beauty Services</b><br/><br></br>
                              </li>
                              <li className="listt"><img src={Line} alt=""  className="img-fluid mx-2" />
                              <b>Weekly Religious</b>
                              <p className="para mx-5">
                              Services
                              </p>
                              </li>
                             
                  </ul>

          </div>
        </div>
       </div>
    </div>
        </div>
      </section>
    </>
  )
}

export default Amenities
