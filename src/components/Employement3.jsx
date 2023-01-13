import React from 'react'
import emp2 from './img/emp2.png'
import em1 from './img/em1.png'
import em2 from './img/em2.png'
import em3 from './img/em3.png'
import em4 from './img/em4.png'
import em5 from './img/em5.png'
import em6 from './img/em6.png'
import './Employement3.css'

function Employement3() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1 className="heading_2">Compitative Pay and Full Benifits Include</h1>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li className="list"><img src={em1} alt="" className="img img-fluid mx-2" />Medical</li>
                            <li className="list"><img src={em2} alt="" className="img img-fluid mx-2 mt-2" />Vision</li>
                            <li className="list"><img src={em3} alt="" className="img img-fluid mx-2 mt-2" />Free Life Insurance</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                    <ul className="list-unstyled">
                            <li className="list"><img src={em4} alt="" className="img img-fluid mx-2" />Medical</li>
                            <li className="list"><img src={em5} alt="" className="img img-fluid mx-2 mt-2" />Vision</li>
                            <li className="list"><img src={em6} alt="" className="img img-fluid mx-2 mt-2" />Free Life Insurance</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <img src={emp2} alt="" className="img img-fluid" />
            </div>
        </div>
      </div>
    </>
  )
}
export default Employement3