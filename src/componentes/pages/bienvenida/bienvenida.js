import "./bienvenida.css";
import React, { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import SelectCategoria from "../../acciones/categoria";
import { useTranslation } from "react-i18next";
import UserSidebar from "./../../firebase/user-sidebar";
import CambiarIdioma from "./../../acciones/cambiar-idioma";
import { Toast } from 'primereact/toast';
import { useContextoUsuario } from "../../contexto/contextoUsuario";


function Bienvenida(props) {
  const { t } = useTranslation();
  const toast = useRef();
  const [disabledStartButton, setDisabledStartButton] = useState(true);
  const { usuario, setUsuario, disabledInputName,mensaje,setMensaje,tipo,setTipo } = useContextoUsuario();
  const [disabledLogOut, setDisabledLogOut] = useState(false)

  const mostrarError = (tipo, mensaje) => {
    toast.current.show({ severity: `${tipo}`, detail: `${mensaje}`, life: 3000 });
  }
  useEffect(() => {
    if (mensaje) mostrarError(tipo, mensaje)

    return (() => {
      setMensaje()
      setTipo()
    })

  }, [mensaje])

  useEffect(() => {
    if (usuario) {
      setDisabledStartButton(false);
    }
    else {
      setDisabledStartButton(true);
    }
  }, [{ usuario }]);

  const handleChange = (e) => {
    setUsuario(e.target.value);
    setDisabledLogOut(true)
  }

  return (
    <div className="flex-column h-screen w-screen flex justify-content-center bg-teal-400">
      <div className="p-3">
        <CambiarIdioma />
      </div>
      <h1 className="flex justify-content-center p-8 font-bold font-italic text-6xl text-gray-900">
        {t("trivial")}
      </h1>
      <div className="h-screen w-screen text-center bg-yellow-500 p-4 font-bold text-gray-900"
        id="usuario">
        <div className="flex justify-content-center">
          <UserSidebar disabledLogOut={disabledLogOut} />
          <InputText className="w-13rem mr-7" defaultValue={usuario}
            placeholder={t("nombre")} disabled={disabledInputName}
            onChange={handleChange} />
        </div>
        <div className="p-2" id="select-categoria">
          <SelectCategoria
            className="w-13rem h-full p-3 border-round"
            setCategoria={props.setCategoria} />

        </div>
        <div
          className="border-round-top-xl p-2 font-bold text-gray-900"
          id="botoninicio"
        >
          <Button
            disabled={!props.categoria || disabledStartButton}
            onClick={() => props.setEsPantallaPrincipal(false)}
            espantallaprincipal={props.espantallaprincipal}
            type="button"
            label={t("iniciar")}
            icon="pi pi-check"
          ></Button>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
}

export default Bienvenida;