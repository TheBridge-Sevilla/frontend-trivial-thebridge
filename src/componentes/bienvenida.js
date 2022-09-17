import "./bienvenida.css";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import SelectCategoria from "./categoria";
import { useTranslation } from "react-i18next";
import DialogDemo from "./dialogo-registro";
import CambiarIdioma from "./cambiar-idioma";


function Bienvenida(props) {
  const { t } = useTranslation();
  const [disabledButton, setDisabledButton] = useState(true);

  return (
    <div className="flex-column h-screen w-screen flex justify-content-center bg-cyan-500">
      <div className="p-3">
        <CambiarIdioma />
      </div>
      <div className="flex justify-content-center bg-cyan-500 border-round-top p-8 font-bold text-gray-900">
        <h1>{t("trivial")}</h1>
      </div>
      <div
        className="h-screen w-screen text-center bg-yellow-500 p-4 font-bold text-gray-900"
        id="usuario"
      >
        <InputText
          className="w-13rem"
          placeholder={t("nombre")}
          onChange={(e) => {
            if (e.target.value.length != 0) {
              setDisabledButton(false);
            } else {
              setDisabledButton(true);
            }
          }}
        />
        <div className="p-2" id="select-categoria">
          <SelectCategoria
            className="w-13rem h-full p-3 border-round"
            setCategoria={props.setCategoria}
          />

        </div>
        <DialogDemo/>
        <div
          className="border-round-top-xl p-2 font-bold text-gray-900"
          id="botoninicio"
        >
          <Button
            disabled={!props.categoria || disabledButton}
            onClick={() => props.setEsPantallaPrincipal(false)}
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
