import React from "react";
import mawingu from "../assets/img/mawingu.png";
import {Link} from "react-router-dom";
const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <a className="navbar-brand" href="#">
          <img src={mawingu} alt="Mawingu Logo" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TasksLayout">
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/PersonnelLayout">
                  Personnel
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Reports
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Commissions
                  </a>
                  <a className="dropdown-item" href="#">
                    Customers
                  </a>
                  <a className="dropdown-item" href="#">
                    Merchants
                  </a>
                  <a className="dropdown-item" href="#">
                    Payments
                  </a>
                </div>
              </li>
            </ul>
            <div className="my-2 my-lg-0">
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userAccount"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user" aria-hidden="true"></i>
                  Alvaro
                </a>
                <div className="dropdown-menu" aria-labelledby="userAccount">
                  <Link className="dropdown-item" to="/resetPassword">
                    Change Password
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
