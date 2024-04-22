import React from "react";
import PropTypes from "prop-types";
import "./FormInput.css";
import "./FormTimeInput.css";

const FormTimeInput = ({ title, value, onChange, className }) => {
  return (
    <div className={`form-input ${className || ""}`}>
      <label>{title}</label>
      <input type="time" value={value} onChange={onChange}  />
    </div>
  );
};

FormTimeInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

FormTimeInput.defaultProps = {
  value: "",
  className: "",
};

export default FormTimeInput;
