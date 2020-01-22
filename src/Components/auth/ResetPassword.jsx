import React, { Component } from "react";
import mawingu from "../assets/img/mawingu.png";
class ResetPassword extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="mt-5 d-flex justify-content-center">
          <div className="mt-5 p-3 login-container shadow">
            <div class="login-header">
              <img src={mawingu} alt="Mawingu Logo" />
              <h1 class="my-3">Admin Register</h1>
            </div>
            <div className="login-body">
              <form action="#" method="post">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control is-invalid"
                    placeholder="Password"
                  />
                  
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control is-invalid"
                    placeholder=" Confirm Password"
                  />
                  
                </div>
                {/* <div className="d-flex justify-content-between align-items-center">
              <Link to="/resetPassword" className="text-decoration-none">
                Reset Password
              </Link> */}
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResetPassword;
