import { useState, useEffect, React } from "react";
import PropTypes from "prop-types";
import FormTextInput from "./FormTextInput";
import FormButton from "./FormButton";
import FormCalendarInput from "./FormCalendarInput";
import FormTimeInput from "./FormTimeInput";
import FormListInput from "./FormListInput";
import "./MainForm.css";

const options = ["Femenino", "Masculino", "Prefiero no decirlo"];
const numericFilter = /^[0-9]*$/; 

const MainForm = ( {addRegister} ) => {
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("mainFormData")) || {};

    setPatientName(storedData.patientName || "");
    setPatientDNI(storedData.patientDNI || "");
    setSymptoms(storedData.symptoms || "");
    setDate(storedData.date || "");
    setTime(storedData.time || "");
    setGender(storedData.gender || options[0]);
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientDNI, setPatientDNI] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gender, setGender] = useState(options[0]);

  const updateLocalStorage = (key, value) => {
    const storedData = JSON.parse(localStorage.getItem("mainFormData")) || {};
    storedData[key] = value;
    localStorage.setItem("mainFormData", JSON.stringify(storedData));
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e, setValue, key) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateLocalStorage(key, newValue);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!patientName.trim()) {
      formErrors.patientName = "El nombre del paciente es obligatorio.";
    }
    if (!patientDNI.trim()) {
      formErrors.patientDNI = "El DNI del paciente es obligatorio.";
    }
    if (!date.trim()) {
      formErrors.date = "La fecha de cita es obligatoria.";
    }
    if (!time.trim()) {
      formErrors.time = "La hora de cita es obligatoria.";
    }
    if (!symptoms.trim()) {
      formErrors.symptoms = "Los síntomas son obligatorios.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        patientName,
        patientDNI,
        symptoms,
        date,
        time,
        gender,
      };

      console.log("Formulario enviado con:", formData);
      
      addRegister(formData);
    }
  };

  return (
    <div className="form">
      <h1 className="form-title">HACER UNA CITA</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <FormTextInput
            title="Nombre del Paciente"
            value={patientName}
            onChange={(e) => handleChange(e, setPatientName, "patientName")}
            placeholder="Ingresa el nombre del paciente"
          />
          <FormCalendarInput
            title="Fecha de Cita"
            value={date}
            onChange={(e) => handleChange(e, setDate, "date")}
          />
        </div>
        <div className="form-row">
          <FormTextInput
            title="DNI del Paciente"
            value={patientDNI}
            onChange={(e) => handleChange(e, setPatientDNI, "patientDNI")}
            placeholder="Ingresa el DNI del paciente"
            filter={numericFilter}
          />
          <FormTimeInput
            title="Hora de Cita"
            value={time}
            onChange={(e) => handleChange(e, setTime, "time")}
          />
        </div>
        <div className="form-row">
          <FormTextInput
            title="Síntomas"
            value={symptoms}
            onChange={(e) => handleChange(e, setSymptoms, "symptoms")}
          />
          <FormListInput
            title="Género"
            options={options}
            value={gender}
            onChange={(e) => handleChange(e, setGender, "gender")}
          />
        </div>
        <div className="form-row">
          <FormButton title="Enviar" type="submit" className="submit-button" />
        </div>
        <div className="form-row errors-container">
          {errors.patientName && (
            <div className="form-error">{errors.patientName}</div>
          )}
          {errors.patientDNI && (
            <div className="form-error">{errors.patientDNI}</div>
          )}
          {errors.symptoms && (
            <div className="form-error">{errors.symptoms}</div>
          )}
          {errors.date && <div className="form-error">{errors.date}</div>}
          {errors.time && <div className="form-error">{errors.time}</div>}
        </div>
      </form>
    </div>
  );
}

MainForm.propTypes = {
  addRegister: PropTypes.func.isRequired,
};

export default MainForm;
