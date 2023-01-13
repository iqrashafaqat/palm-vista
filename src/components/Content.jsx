import React from 'react'
import './Content.css'

function Content() {
  return (
    <>
      <section>
        <div className="container content-container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center ">
                <h1 className="content-main-heading text-center">
                  Providing Peace Of Mind
                </h1>
                {/* <p className="content-main-para text-center">
                      Palm Vista Nursing and Rehabilitation Center is a 120 bed nursing home serving the Lower and Middle Keys. 
                      Our skilled nursing facility provides short term subacute rehabilitation post-surgery or hospitalization with intensive inpatient physical,
                      occupational, and speech therapies. We create a customized clinical care plan for every resident and tailor our services to maximize recovery potential and quality of life. 
                      We also offer long term care and respite care. We accept most major medical insurances. 
                      Contact our friendly and knowledgeable admissions team today to learn more.
                      </p> */}
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                      <p className="content-main-para text-center">
                      Palm Vista Nursing and Rehabilitation Center is a 120 bed nursing home serving the Lower and Middle Keys. 
                      Our skilled nursing facility provides short term subacute rehabilitation post-surgery or hospitalization with intensive inpatient physical,
                      occupational, and speech therapies. We create a customized clinical care plan for every resident and tailor our services to maximize recovery potential and quality of life. 
                      We also offer long term care and respite care. We accept most major medical insurances. 
                      Contact our friendly and knowledgeable admissions team today to learn more.
                      </p>
                      
                </div>
             </div>
            <div className="row">
                   <div className="col-md-12  m-5 justify-content-center d-flex"> 
                    <button type="button" className="btn text-white">Read Me</button>
                   </div>
            </div>
        </div>
      </div>
  </section>
    </>
  )
}
export default Content
