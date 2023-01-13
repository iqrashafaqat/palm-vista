import React from 'react'
import './VideoContent.css'

function VideoContent() {
  return (
    <>
      <section>
        <div className="container mt-5">
              <div className="col-md-12  pb-3 text-center">
                   <h1 className="VideoContent-main-heading">
                       Watch our video and get a taste of the <span className="VideoContent-main-heading1">Palm Vista</span> resident life.
                   </h1>
              </div>
                  {/* <div className="row"> */}
                 {/* <div className="col-md-12 text-center">
                  <video width="320" height="240" control>
                      <source src="movie.mp4" type="video/mp4"/>
                              <source src="movie.ogg" type="video/ogg"/>
                                    Your browser does not support the video tag.
                  </video>
                  </div> */}
<div className="row justify-content-center">
    <div className="col-md-10 p-5">
      <video autoPlay="" loop="" controls={true} width="100%" height="auto">
        <source type="video/mp4" src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"/>
        </video>
    </div>
  </div>

{/* <video autoplay="" loop="" controls="true" width="100%" height="auto">
        <source type="video/mp4" src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"/>
        </video> */}


                      {/* <div className="col-md-12 ratio ratio-16x9">
                         <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                      </div>  */}
                  {/* </div>    */}
        </div>
      </section>
    </>
  )
}

export default VideoContent
