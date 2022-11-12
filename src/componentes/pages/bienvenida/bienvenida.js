import "./bienvenida.css";
import React, { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import SelectCategoria from "../../acciones/categoria";
import { useTranslation } from "react-i18next";
import BotonIniciarSesion from "./boton-usuario-mobile";
import { Toast } from 'primereact/toast';
import { useContextoUsuario } from "../../contexto/contextoUsuario";
import { HeaderBar } from "./navbar-superior";
import { SignDialog } from "../../firebase/iniciar-sesion-dialog";
import {auth} from "../../firebase/firebase"
import PerfilUsuario from "../../firebase/perfil-usuario"

function Bienvenida(props) {
  const { t } = useTranslation();
  const toast = useRef();
  const [disabledStartButton, setDisabledStartButton] = useState(true);
  const { usuario, setUsuario, disabledInputName, mensaje, setMensaje, tipo, setTipo, setCurrentUser, setDisabledInputName } = useContextoUsuario();
  const [disabledLogIn, setDisabledLogIn] = useState(false)

  const mostrarError = (tipo, mensaje) => {
    toast.current.show({ severity: `${tipo}`, detail: `${mensaje}`, life: 3000 });
  }
  useEffect(() => {
    if (mensaje) mostrarError(tipo, mensaje)
/* 
    if (typeof (setMensaje) != "function") {
      return undefined
    } */
    return (() => {
      setMensaje()
      setTipo()
    })

  }, [mensaje])

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user){
        setUsuario(user.displayName)
        setCurrentUser(auth.currentUser)
        setDisabledInputName(true)
      }
    })
  }, [auth])


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
    if (e.target.value) {
      setDisabledLogIn(true)
    }
    else setDisabledLogIn(false)
  }

  return (

    <div className="flex-column h-screen w-screen flex justify-content-center bg-blue-400">      
      <HeaderBar disabledLogIn={disabledLogIn} />
      <h1 className="flex justify-content-center p-8 font-bold font-italic text-6xl lg:text-7xl text-gray-900">
        {t("trivial")}
      </h1>
      <div className=" h-screen w-screen text-center surface-300 p-4 font-bold text-gray-900 "
        id="usuario">
        <div className="flex justify-content-center">
          <PerfilUsuario/>
          <BotonIniciarSesion disabledLogIn={disabledLogIn} />
          <SignDialog />
          <InputText className="w-13rem mr-7" value={usuario ? usuario : ""}
            placeholder={t("nombre")} disabled={disabledInputName}
            onChange={handleChange} />
        </div>
        <div className=" flex justify-content-center" id="select-categoria">

          <SelectCategoria
            className="w-15rem h-full p-3 border-round"
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
            className="border-round-3xl bg-blue-800 shadow-7"
          ></Button>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
}

export default Bienvenida;