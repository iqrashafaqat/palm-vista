import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


    export default function Navbar() {
    return ( 
<>
        <section>
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <div className="container-fluid">
  
          {/* logo */}
          <Link className="navbar-brand mt-2" to="/">
                <img
                    src="../images/logo.png"
                    height="100"
                    alt="Logo"
                    loading="lazy"
                />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto flex-nowrap ">
                
                        <li className="nav-item">
                            <Link className="nav-link active m-2 menu-item" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active m-2 menu-item" to="/Ourteam">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active m-2 menu-item" to="/Services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active m-2 menu-item" to="/Employement">Employement</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active m-2 menu-item" to="/Contact">Contact</Link>
                        </li> 
                    </ul>
                    <form className="d-flex">
                          <button className="btn text-white  " type="submit">Contact US</button>
                    </form>
                </div>
            </div>
        </nav>
    </section>
 </>
    )
}

