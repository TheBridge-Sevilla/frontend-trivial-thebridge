import "./bienvenida.css";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import SelectCategoria from "./categoria";
import { useTranslation } from "react-i18next";
import UserSidebar from "./Firebase/user-sidebar";
import CambiarIdioma from "./cambiar-idioma";
import { useContextoUsuario } from "../componentes/contexto/contextoUsuario";


function Bienvenida(props) {
  const { t } = useTranslation();
  const [disabledButton, setDisabledButton] = useState(true);
  const [disabledInputText, setDisabledInputText] = useState(false)
  const { usuario } = useContextoUsuario();
  const handleChange = () => {
    (e) => {
      if (e.target.value.length != 0) {
        setDisabledButton(false);
      } else {
        setDisabledButton(true);
      }
    }
  }

  useEffect(() => {
    if (usuario == undefined) {
      setDisabledInputText(false)
    }
    else {
      setDisabledInputText(true)
    }
  }, [{ usuario }]);

  return (
    <div className="flex-column h-screen w-screen flex justify-content-center bg-cyan-500">
      <div className="p-3">
        <CambiarIdioma />
      </div>
      <h1 className="flex justify-content-center p-8 font-bold font-italic text-6xl text-gray-900">
        {t("trivial")}
      </h1>
      <div className="h-screen w-screen text-center bg-yellow-500 p-4 font-bold text-gray-900"
        id="usuario">
        <div className="flex justify-content-center">
          <InputText className="w-13rem mr-2 ml-7" defaultValue={usuario}
            placeholder={t("nombre")} disabled={disabledInputText} onChange={handleChange} />
          <UserSidebar />
        </div>
        <div className="p-2" id="select-categoria">
          <SelectCategoria
            className="w-13rem h-full p-3 border-round"
            setCategoria={props.setCategoria}
          />

        </div>
        <div
          className="border-round-top-xl p-2 font-bold text-gray-900"
          id="botoninicio"
        >

          <Button
            disabled={!props.categoria || disabledButton}
            onClick={() => props.setEsPantallaPrincipal(false)}
            esPantallaPrincipal={props.esPantallaPrincipal}
            type="button"
            label={t("iniciar")}
            icon="pi pi-check"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;
