import React, { useState } from "react";
import IniciarSesion from "./inicar-sesion-contexto"
import Registrarse from "./registro-contexto"
import ContraseñaOlvidada from "./contraseña-olvidada.js"
import { useTranslation } from "react-i18next";

const Usuario = () => {
  const { t } = useTranslation();
  const [registrado, setRegistrado] = useState(false);
  const [contraseñaOlvidada, setContraseñaOlvidada] = useState(false)

  return (


    <div className="container">
      {registrado && contraseñaOlvidada ? <ContraseñaOlvidada /> : (registrado && !contraseñaOlvidada ? <IniciarSesion /> : <Registrarse />)}
      <div onClick={() => setRegistrado(!registrado)}>
        {registrado ? <p className="cursor-pointer">{t("cuenta-no")}</p> : <p className="cursor-pointer">{t("cuenta-si")}</p>}
      </div>
      {registrado && contraseñaOlvidada ? <p onClick={() => setContraseñaOlvidada(!contraseñaOlvidada)} className="cursor-pointer">{t("contraseña-recordada")}</p>
        : (registrado && !contraseñaOlvidada ? <p onClick={() => setContraseñaOlvidada(!contraseñaOlvidada)} className="cursor-pointer">{t("contraseña-olvidada")}</p>
          : <></>)}
    </div>
  );
};

export default Usuario;