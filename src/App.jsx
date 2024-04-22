import React, { useState } from "react";
import "./App.css";
import MainForm from "./components/MainForm";
import Register from "./components/Register";

function App() {
  const [register_list, setRegister_list] = useState([]);

  const addRegister = (register) => {
    setRegister_list([...register_list, register]);
  };

  const deleteRegister = (index) => {
    const newRegister_list = [...register_list];
    newRegister_list.splice(index, 1);
    setRegister_list(newRegister_list);
  }
  
  return (
    <div className="App">
      <MainForm addRegister={addRegister} />
      <div className="register-list">
        {register_list.map((register, index) => (
          
          <Register key={index} {...register} index={index} deleteRegister={deleteRegister}/>
        ))}
      </div>
    </div>
  );
}

export default App;
