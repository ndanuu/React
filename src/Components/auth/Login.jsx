import React, { Component } from "react";
import Image from "../Common/Image";
import H1 from "../Common/H1";
import mawingu from "../assets/img/mawingu.png";
import InputFields from "../Common/InputFields";
import Button from "../Common/Button";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      password: ""
    };
  }

  render() {
    return (
      <div class="mt-5 d-flex justify-content-center">
        <div class="mt-5 p-3 login-container shadow">
          <div class="login-header">
            <img src={mawingu} />
            <H1 className="my-3" title="Admin Login" />
          </div>
          <div class="login-body">
            <form action="#" method="post">
              <InputFields
               formType="form-control"
                forIcon="fa fa-phone"
                typeInput="tel"
                holdValue="Phone"
                
              />
              <InputFields
              formType="form-control is-invalid"
                forIcon="fa fa-lock"
                typeInput="text"
                holdValue="Password"
                
              />
              
              <Button typeButton="Submit" classButton="btn btn-primary">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
