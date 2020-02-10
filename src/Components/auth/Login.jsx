import React, { Component } from "react";
// import Image from "../Common/Image";
import { H1, Button, InputFields } from "../Common";
import mawingu from "../assets/img/mawingu.png";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      personnel_phone: "",
      password: "",
      loggedIn
    };
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { personnel_phone, password } = this.state;
    //login magic
    console.log({ personnel_phone, password });
    if (personnel_phone === "1" && password === "B") {
      window.localStorage.setItem("token", "qwertyuiop123erfgbn");
      this.setState({
        loggedIn: true
      });
      console.log("yay i am clicked");
    }
  }

  render() {
    const { personnel_phone, password } = this.state;
    if (this.state.loggedIn) {
      return <Redirect to="/mainLayout" />;
    }
    return (
      <div class="mt-5 d-flex justify-content-center">
        <div class="mt-5 p-3 login-container shadow">
          <div class="login-header">
            <img src={mawingu} />
            <H1 className="my-3" title="Admin Login" />
          </div>
          <div class="login-body">
            <form onSubmit={this.submitForm}>
              <InputFields
                formType="form-control"
                forIcon="fa fa-phone"
                typeInput="Number"
                holdValue="Phone"
                autocomplete="off"
                onChange={this.onChange}
                value={personnel_phone}
                name="personnel_phone"
              />
              <InputFields
                formType="form-control is-invalid"
                forIcon="fa fa-lock"
                typeInput="Password"
                holdValue="Password"
                autocomplete="off"
                onChange={this.onChange}
                value={password}
                name="password"
              />

              <Button
                typeButton="Submit"
                classButton="btn btn-primary"
                label="Login"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
