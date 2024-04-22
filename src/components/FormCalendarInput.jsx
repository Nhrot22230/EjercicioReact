import React from "react";
import PropTypes from "prop-types";
import "./FormInput.css";
import "./FormCalendarInput.css";

const FormCalendarInput = ({ title, value, onChange, className }) => {
  return (
    <div className={`form-input ${className || ""}`}>
      <label>{title}</label>
      <input type="date" value={value} onChange={onChange} />
    </div>
  );
};

FormCalendarInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

FormCalendarInput.defaultProps = {
  value: "",
  className: "",
};

export default FormCalendarInput;
