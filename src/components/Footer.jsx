// import React from "react";
// import image_55 from './img/image_55.png'
// import facebook from'./img/facebook.png'
// import twitter from'./img/twitter.png'
// import instagrame from'./img/instagram.png'
// import './Footer.css'

// const Footer = () => {
// return (
//     <>
//     <section className="footer">
//     <div className="container ">
//         <div className="row ">
//         <div className="col-md-4">
//             <div className="footer-image p-5">
           
//             <img src={image_55} alt="image here" className="mx-auto d-block img-fluid" />
//             </div>
//         </div>
//         <div className="col-md-4 d-block text-white">
//             <h3 className="heading_footer pt-4">Quick Links</h3>
//             <div><a href="#">Home</a></div>
//             <div><a href="#">Services</a></div>
//             <div><a href="#">Amenities</a></div>
//             <div><a href="#">Locations</a></div>
//             <div><a href="#">Careers</a></div>
//         </div>
//         <div className="col-md-4 text-white">
//             <h3 className="heading_footer pt-4">Contact Us</h3>
//             <div><a href="#">Phone</a></div>
//             <div><span>+1 (319) 377-7363</span></div>
//             <div><a href="#">Email</a></div>
//             <div><a href="#">info@ivyhealthcaregroup.com</a></div>
//             <div><a href="#">Follow us on:</a></div>
//             <div className="pb-4">
//                <span className="image-fluid me-2"><a href="#" > <img src={twitter} alt="image here" /> </a></span>
//                <span className="image-fluid me-2"><a href="#" > <img src={facebook} alt="image here" /> </a></span>
//                <span className="image-fluid me-2"><a href="#" > <img src={instagrame} alt="image here" /> </a></span>
//             </div>
//         </div>
//         </div>
//         </div>
//         </section>
//         <div className=" my-4 text-center">
//             <h6>© 2021 ivyhealthcaregroup. All Rights Reserved</h6>
//         </div>
//     </>
// );
// };
// export default Footer;
































import React from "react";
import './Footer.css'
const Footer = () => {
   
return (
    <>
    <section>
    <div className="container-fluid footer mt-5">
        <div className="row ">
        <div className="col-md-4">
            <div className="footer-image p-5">
            <img src="../images/image_55.png" className="mx-auto d-block img-fluid" alt="..."  />
            </div>
        </div>
        <div className="col-md-4 d-block text-white">
            <h3 className="heading_footer pt-4">Quick Links</h3>
            <div><a href="#">Home</a></div>
            <div><a href="#">Services</a></div>
            <div><a href="#">Amenities</a></div>
            <div><a href="#">Locations</a></div>
            <div><a href="#">Careers</a></div>
        </div>
        <div className="col-md-4 text-white">
            <h3 className="heading_footer pt-4">Contact Us</h3>
            <div><a href="#">Phone</a></div>
            <div><span>+1 (319) 377-7363</span></div>
            <div><a href="#">Email</a></div>
            <div><a href="#">info@ivyhealthcaregroup.com</a></div>
            <div><a href="#">Follow us on:</a></div>
            <div className="pb-4">
               <span className="image-fluid me-2"><a href="#" > <img src="./images/twitter.png" alt="image here" /> </a></span>
               <span className="image-fluid me-2"><a href="#" > <img src="./images/facebook.png" alt="image here" /> </a></span>
               <span className="image-fluid me-2"><a href="#" > <img src="./images/instagram.png" alt="image here" /> </a></span>
            </div>
        </div>
        </div>
        </div>
        {/* <div className="row my-4 footer-l">
                <div className="col-md-12 text-center">
                    <h6>© 2021 ivyhealthcaregroup. All Rights Reserved</h6>
                </div>
        </div> */}
        <div className="my-4 text-center">
            <h6>© 2021 ivyhealthcaregroup. All Rights Reserved</h6>
        </div>
        </section>
       
    </>

);
};
export default Footer;