import React from 'react'
import './Header.css'
const Header = () => {
  return (
  <>
   
          <section className="header-main-section">
            <div className="container-fluid">
             <div className="row">
                <div className=" col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                    <h1 className="display-2 mt-5">Welcome to<br /> <span className="main-hero-heading">PALM VISTA</span> </h1>
                    <h3 className="main-hero-sb-heading">Creating New Perspective To Care</h3>
                    <p className="main-hero-para">Nursing And Rehabilitation Center</p>
                    <div className="button">
                    <form className="d-flex">
                        <button className="btn text-white" type="submit">Our Services</button>
                    </form>
                    </div>
                </div>
    {/* -------------------------Main Header Left Side------------------------- */}
                <div className="col-12 col-lg-6">
                    <img src="./images/vector1.png" alt="image"  className='img-fluid'/>

                </div>
                </div>
             </div>
            
      </section>
   
    </>
  )
}

export default Header
