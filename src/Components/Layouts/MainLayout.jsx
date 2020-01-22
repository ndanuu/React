import React, { Component } from "react";
import TasksLayout from "../Tasks/TasksLayout";
import NavBar from "../Common/NavBar";
import PersonnelLayout from '../Personnel/PersonnelLayout';

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <TasksLayout />
        <PersonnelLayout/>
        
      </React.Fragment>
    );
  }
}

export default MainLayout;
