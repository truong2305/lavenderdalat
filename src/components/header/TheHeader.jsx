/** @format */

import {NavLink} from "react-router-dom";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import "./header.scss";

function TheHeader() {
  return (
    <header>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xl-4 col-md-8 text-md-center text-xl-start offset-md-2 col-8 offset-xl-0 mb-md-4 mb-xl-0'>
            <Logo />
          </div>
          <div className='col-xl-8 col-lg-9 offset-lg-2 d-none d-md-flex offset-xl-0 col-12 justify-content-between align-items-center'>
            <NavBar />
            <div className="d-flex header-icon">
                <NavLink to='/cart'>
                  <i class='fas fa-shopping-cart'></i>
                </NavLink>
                <NavLink to='/user' className="ms-4">
                <i class="fas fa-user-alt"></i>
                </NavLink>
            </div>
          </div>
          <div className="col-4 justify-content-end d-inline-flex d-md-none align-items-center">
          <div className=" mobile-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TheHeader;
