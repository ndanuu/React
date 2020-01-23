import React from "react";
// import classnames from "classnames";
const InputFields = props => {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={props.forIcon} aria-hidden="true"></i>
          </span>
        </div>
        <input
          className={props.formType}
          type={props.typeInput}
          placeholder={props.holdValue}
        />
        <div className="invalid-feedback">Password is required</div>

      </div>
    </React.Fragment>
  );
};

export default InputFields;
