import React from 'react'
import './Body.css'
const Body = () => {
  return (
    <>
     <section>
        <div className="container pb-5 mt-5">
            <div className="row">
                   <div className="col-12 col-lg-7 mt-5 bodyimage-left-side d-flex">
                   <img src="./images/image.png" alt="image"  className='img-fluid'/>
                   </div>
                   <div className="col-12 col-lg-5 mt-5 bodyimage-right-side">
                   <img src="./images/Group515.png" alt="image"  className='img-fluid'/>
                   <p className="bodycontent-right-side mt-5 text-center">
                   Palm Vista Nursing and Rehabilitation Center are Proud Members of the Key West Chamber of Commerce 
                   and Key West Business Guild.
                   Palm Vista was awarded the 2022 Bronze National Quality Award by the American Health Care Association.
                   </p>
                   <div className="row">
                            <div className="col-md-12  m-5 justify-content-center d-flex"> 
                                <button type="button" className="btn text-white">Read Me</button>
                            </div>
                   </div>
         </div>

                   
            </div>
        </div>
     </section> 
    </>
  )
}

export default Body

