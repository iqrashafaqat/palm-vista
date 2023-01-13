import React from 'react'
import './Form.css'

function Form() {
  return (
    <>
      <section>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h5 className="form-1st-heading text-center">
                            Want To Learn More About
                    </h5>
                    <h1 className="form-2nd-heading text-center mt-3">
                          The Palm Vista
                    </h1>
                    </div> 
                    </div>
                    <div className="row">
                    <div className="col-md-2"></div>
                   <div className="col-md-8">
                    <p className="form-para text-center mt-3">
                    Give us a call, send us an email, or fill out the contact form, 
                     and we’ll get back to you as soon as possible!
                    </p>
                    </div>
                    <div className="col-md-2"></div>
                    </div>
              
<div className="row mt-5 ">
  <div className="col-md-2"></div> 
<div className="col-md-8 ">
            <form>
            <div className="form-text mb-5 ">
    <label htmlFor="exampleInputtext1" className="form-label ">Full Name</label>
    {/* <hr/> */}
    <input type="text" className="form-control box" id="exampleInputtext1" aria-describedby="textHelp"/>
   
  </div>
  <div className="form-text mb-5 ">
    <label htmlFor="exampleInputEmail1" className="form-label">E-Mail</label>
    {/* <hr/> */}
    <input type="email" className="form-control  box" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  

  <div className="form-text mb-5 ">
  <label htmlFor="message">Your message</label>
  {/* <hr/> */}
  <textarea type="text" id="message" name="message" rows="4" className="form-control md-textarea box"></textarea>
   
  </div>
  <div className="col-md-2"></div>
  </form>
  </div>
  </div>
  <div className="row">
                   <div className="col-md-12  m-5 justify-content-center d-flex"> 
                    <button type="button" className="btn text-white">Let's Talk</button>
                   </div>
            </div>
           

 </div>
 </section>
    </>
  )
}

export default Form
