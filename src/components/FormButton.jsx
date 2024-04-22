import React from "react";
import PropTypes from "prop-types"; // Para definir los tipos de propiedades
import "./FormButton.css"; // Estilos personalizados para el botón, opcional

const FormButton = ({ title, onClick, type, disabled, className }) => {
  return (
    <button
      className={`form-button ${className || ""}`}
      type={type} // Define el tipo del botón (submit, button, etc.)
      onClick={onClick} // Manejador de eventos de clic
      disabled={disabled} // Habilitar o deshabilitar el botón
    >
      {title} {/* Texto del botón */}
    </button>
  );
};

FormButton.propTypes = {
  title: PropTypes.string.isRequired, // El título del botón es obligatorio
  onClick: PropTypes.func, // Manejador para el evento de clic
  type: PropTypes.string, // Tipo de botón
  disabled: PropTypes.bool, // Si el botón está deshabilitado
  className: PropTypes.string, // Clase CSS adicional, opcional
};

FormButton.defaultProps = {
  onClick: null, // El manejador de clic es opcional
  type: "button", // El tipo por defecto es "button"
  disabled: false, // El botón está habilitado por defecto
  className: "", // Clase CSS vacía por defecto
};

export default FormButton;
