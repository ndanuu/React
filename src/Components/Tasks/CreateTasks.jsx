import React, { Component } from "react";
class CreateTasks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="addtaskModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <form className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Task(s)
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-between align-items-end mb-4">
                  <label className="col-sm-2 pl-n15">First Name:</label>
                  <div className="d-flex justify-content-between col-sm-10 px-n15">
                    <input
                      className="form-control col-sm-5"
                      type="text"
                      placeholder="Task Name"
                    //   name="name"
                    //   onChange={this.onChange}
                    //   value={name}
                    />
                  </div>
                  {/* {errors && ( */}
                    <small className="form-text text-danger">
                      {/* {errors.name} */}
                    </small>
                  )}
                </div>
              </div>

              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-danger rounded-0"
                  data-dismiss="modal"
                >
                  CLOSE
                </button>
                <button
                  type="submit"
                  className="btn btn-primary rounded-0"
                  onClick={this.submitNewEntry}
                >
                  ADD STATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateTasks;
