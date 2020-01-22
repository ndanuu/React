import React, { Component } from "react";
import TasksList from "./TasksList";
import SearchTasks from './SearchTasks';
class TasksLayout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            
            <TasksList
             />
            {/* Search tasks goes here */}
            <SearchTasks/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TasksLayout;
