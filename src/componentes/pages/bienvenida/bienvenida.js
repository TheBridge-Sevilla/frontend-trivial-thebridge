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
import { Image } from 'primereact/image';


function Bienvenida(props) {
  const { t } = useTranslation();
  const toast = useRef();
  const [disabledStartButton, setDisabledStartButton] = useState(true);
  const { usuario, setUsuario, disabledInputName, mensaje, setMensaje, tipo, setTipo } = useContextoUsuario();
  const [disabledLogIn, setDisabledLogIn] = useState(false)

  const mostrarError = (tipo, mensaje) => {
    toast.current.show({ severity: `${tipo}`, detail: `${mensaje}`, life: 3000 });
  }
  useEffect(() => {
    if (mensaje) mostrarError(tipo, mensaje)

    if (typeof (setMensaje) != "function") {
      return undefined
    }
    return (() => {
      setMensaje()
      setTipo()
    })

  }, [mensaje])

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user){
        setUsuario(user.displayName)
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
      <div className="flex flex-wrap justify-content-center card-container  gap-1 ">
      <Image  src='media/fragen.png'   className="flex justify-content-center py-8">
      </Image>
      <Image  src='media/logo-fragen.png'  id="rotar" className="flex justify-content-center py-8">
      </Image>

      </div>
      <div className=" h-screen w-screen text-center surface-300 p-4 font-bold text-gray-900 "
        id="usuario">
        <div className="flex justify-content-center">
          <PerfilUsuario/>
          <BotonIniciarSesion disabledLogIn={disabledLogIn} />
          <SignDialog />
          <InputText className="w-13rem mr-7" value={usuario}
            placeholder={t("nombre")} disabled={disabledInputName}
            onChange={handleChange} />
        </div>
        <div className=" flex justify-content-center pt-2" id="select-categoria">

          <SelectCategoria
            className="w-15rem h-full p-3 border-round"
            setCategoria={props.setCategoria} />

        </div>
        <div
          className="border-round-top-xl p-2 font-bold text-gray-900 pt-2 "
          id="botoninicio"
        >
          <Button
            disabled={!props.categoria || disabledStartButton}
            onClick={() => props.setEsPantallaPrincipal(false)}
            espantallaprincipal={props.espantallaprincipal}
            type="button"
            label={t("iniciar")}
            icon="pi pi-check"
            className="border-round-3xl bg-blue-800 shadow-7 w-12rem  "
          ></Button>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
}

export default Bienvenida;