import React, { useState } from "react";
import IniciarSesion from "./inicar-sesion-contexto"
import Registrarse from "./registro-contexto"
import ContraseñaOlvidada from "./contraseña-olvidada.js"
const Usuario = () => {
  const [registrado, setRegistrado] = useState(false);
  const [contraseñaOlvidada, setContraseñaOlvidada] = useState(false)

  return (


    <div className="container">
    {registrado && contraseñaOlvidada ? <ContraseñaOlvidada /> : (registrado && !contraseñaOlvidada ? <IniciarSesion/> : <Registrarse />)}
    <p onClick={() => setRegistrado(!registrado)}>
      {registrado ? <p className="cursor-pointer">¿Aun No tienes Cuenta?</p> : <p className="cursor-pointer">¿Ya Tienes Cuenta?</p>}
    </p>
      {registrado && contraseñaOlvidada ? <p onClick={() => setContraseñaOlvidada(!contraseñaOlvidada)} className="cursor-pointer">He Recordado Mi Contraseña</p>
      : (registrado && !contraseñaOlvidada ?  <p onClick={() => setContraseñaOlvidada(!contraseñaOlvidada)} className="cursor-pointer">He Olvidado Mi Contraseña</p>
      : <></>)}
  </div>
  );
};

export default Usuario;