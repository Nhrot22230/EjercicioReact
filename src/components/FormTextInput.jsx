import React, { useState } from "react";
import PropTypes from "prop-types";
import "./FormInput.css";
import "./FormTextInput.css";

const FormTextInput = ({
  title,
  value,
  onChange,
  placeholder,
  className,
  canBeEmpty,
  filter, // New prop to define the allowed characters
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false); // State to track invalid input

  const handleBlur = () => {
    setIsTouched(true);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (filter) {
      // If a filter is provided, validate the input
      if (!filter.test(newValue)) {
        setIsInvalid(true); // Mark as invalid if it doesn't match the filter
        return; // Exit early to prevent state update
      }
    }

    setIsInvalid(false); // Reset the invalid state if input is valid
    onChange(e); // Call the provided onChange handler

    if (isTouched && !value.trim()) {
      setIsTouched(false); // Reset the touch state if the input is corrected
    }
  };

  return (
    <div className={`form-input ${className || ""}`}>
      <label>{title}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {isTouched && !canBeEmpty && !value.trim() && (
        <span className="form-error">This field cannot be empty.</span>
      )}
      {isInvalid && (
        <span className="form-error">
          This field contains invalid characters.
        </span>
      )}
    </div>
  );
};

FormTextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  canBeEmpty: PropTypes.bool,
  filter: PropTypes.instanceOf(RegExp), // New prop type for regex-based filters
};

FormTextInput.defaultProps = {
  value: "",
  placeholder: "",
  className: "",
  canBeEmpty: false,
  filter: null, // Default is no filter
};

export default FormTextInput;
