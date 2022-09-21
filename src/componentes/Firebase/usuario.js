import React, { useState } from "react";
import IniciarSesion from "./inicar-sesion-contexto"
import Registrarse  from "./registro-contexto"
const Usuario = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <IniciarSesion /> : <Registrarse />}
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
};

export default Usuario;