import React, { Component } from "react";
import {H1, Button,Logo} from "../Common";
import { Link } from "react-router-dom";

class LougOuT extends Component {
  constructor(props) {
    super(props);
     window.localStorage.removeItem("token");
  }
  render() {
    return (
      <React.Fragment>
      <div className="mt-5 d-flex justify-content-center">
<div className="mt-5 p-3 login-container shadow">
 <div className="login-header">
   <Logo/>
   <H1 className="my-3" title=" Log in Again ?" />
 </div>
 <div className="login-body">
   <form onSubmit={this.submitForm}>
     <div className="invalid-feedback">Password is required</div>

     <Link to="/"> <Button typeButton="Submit" classButton="btn btn-info"
     label= "Login"/></Link>

   </form>
 </div>
</div>
</div>

   </React.Fragment>
    );
  }
}

export default LougOuT;
