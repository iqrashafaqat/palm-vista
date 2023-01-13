import React from 'react'
import './Ourmission.css'
import  vl from './img/vl.png'

function Ourmission() {
  return (
    <>
      <section>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="mission-main-heading">
                    Our Management Team: A combined 150 years of Leadership Excellence and Clinical Expertise.
                     We are here to serve our Residents, their Families, and our Community.
                    </h1>
                </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-3 mission-list align-items-start">
            <ul className="list">
                                <li className="list">Administrator: Jacob Jay Berelowitz, LNHA, MSW</li>
                                <li className="list">Assistant Administrator: Dona Rosado</li>
                                <li className="list">Medical Director: Dr. Jamie Goodman</li>
                                <li className="list">Director of Nursing: Shalandra Williams, RN</li>
                                <li className="list">Assistant Director of Nursing: Erica Wilson, RN</li>
                                <li className="list">Director of Rehabilitation: Marissa Redding, COTA</li>
                                <li className="list">Social Services Director: Vaidehi “Boni” Soni, BSHA</li>
                    </ul>
            </div>
            <div className="col-md-1"></div>
                      <div className="col-md-1 align-items-right">
                          <img src={vl} alt="" className="img-fluid"/>
                      </div>
            <div className="col-md-3  mission-list align-items-start">
            <ul className="list ">
                                <li className="list">Food Services Director: Daniel Cook, CDM</li>
                                <li className="list">Registered Dietician: Michelle Cote, MS, RD LDN</li>
                                <li className="list">MDS Coordinator: Latasha Hamilton, LPN, RAC-CT, LNHA</li>
                                <li className="list">Human Resources & Business Office Manager: Jennifer McClendon</li>
                                <li className="list">Maintenance Director: BJ Holloway</li>
                                <li className="list">Environmental Services Manager: Sandra Whyte</li>
                                <li className="list">Activities Director: Rhonda Major</li>
                    </ul>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row m-5">
                  <div className="col-md-9">
               <h1 className="mission-main-heading2">
               Call Our Friendly Human Resources Team Today!
                </h1>  
            </div>
            <div className="col-md-3 "> 
                <button type="button " className="btn text-white">IVY HEALTHCARE GROUP</button>   
            </div> 
        </div>
        
        </div>
      </section>
    </>
  )
}

export default Ourmission
