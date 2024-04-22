import React from "react";
import PropTypes from "prop-types";
import FormTextInput from "./FormTextInput";
import FormCalendarInput from "./FormCalendarInput";
import FormTimeInput from "./FormTimeInput";
import FormButton from "./FormButton";
import "./MainForm.css";
import "./Register.css";

const Register = ({ patientName, patientDNI, symptoms, date, time, gender, deleteRegister, index }) => {
  const handleDelete = () => {
    console.log("Deleting register...");
    deleteRegister(index);
  }
  return (
    <div className="form register">
      <form>
        <div className="form-row">
          <label>Nombre del Paciente: {patientName}</label>
        </div>
        <div className="form-row">
          <label>Género: {gender}</label>
        </div>
        <div className="form-row">
          <label>DNI del Paciente: {patientDNI}</label>
        </div>
        <div className="form-row">
          <FormCalendarInput title="Fecha de Cita" value={date} onChange={() => {}} />
        </div>
        <div className="form-row">
          <FormTimeInput title="Hora de Cita" value={time} onChange={() => {}} />
        </div>
        <div className="form-row">
          <FormTextInput title="Síntomas" value={symptoms} onChange={() => {}} />
        </div>
        <div className="form-row">
          <FormButton title="Borrar" onClick={handleDelete} />
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  patientName: PropTypes.string.isRequired,
  patientDNI: PropTypes.string.isRequired,
  symptoms: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  gender: PropTypes.string,
  deleteRegister: PropTypes.func,
  index: PropTypes.number,
};

export default Register;
