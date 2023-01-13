import React from 'react'
import heroimage from './img/heroimage.png';

function Conatcthero() {
  return (
    <>
     <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <img src={heroimage} alt=""  className="img-fluid"/>
                </div>
            </div>
        </div>
     </section>

    </>
  )
}

export default Conatcthero
