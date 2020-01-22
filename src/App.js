import React from "react";
import "./App.css";
import Login from "./Components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ResetPassword from "./Components/auth/ResetPassword";
import MainLayout from "./Components/Layouts/MainLayout";
import TasksLayout from "./Components/Tasks/TasksLayout";
import PersonnelLayout from "./Components/Personnel/PersonnelLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/resetPassword" component={ResetPassword} />
        <Route exact path="/mainLayout" component={MainLayout} />
        <Route exact path="/TasksLayout" component={TasksLayout}/>
        <Route exact path="/PersonnelLayout" component={PersonnelLayout}/>
        
      </Switch>
    </Router>
  );
}

export default App;
