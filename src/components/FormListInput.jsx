import React from "react";
import PropTypes from "prop-types";
import "./FormInput.css";
import "./FormListInput.css";

const FormListInput = ({ title, options, value, onChange, className }) => {
  return (
    <div className={`form-input ${className || ""}`}>
      <label>{title}</label>
      <select className="input" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

FormListInput.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FormListInput.defaultProps = {
  className: "",
};

export default FormListInput;
