import React from 'react'
import './Content1.css'

const Content1 = () => {
  return (
    <>
      <section>
       <div className="container mt-5">
        <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="Content1-main-haeding">
                    Check Us Out On Facebook and <a href="#" className="link">Drop Us A Like!</a>
                </h1>
            </div> 
        </div>
        <div className="row mt-5">
            <div className="col-12 col-lg-7 contentimage-left-side">
                <img src="../images/image1.png" alt="" className="img-fluid"/>
            </div>
            <div className="col-12 col-lg-5 contentimage-right-side">
            <img src="../images/facebookimage.png" alt="" className="img-fluid"/>
            </div>
        </div>
        <div className="row m-5 pb-5">
                  <div className="col-md-9">
               <h1 className="Content1-main-haeding">
                  Call Our Friendly Admissions Team Today!
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
export default Content1
