import "./bienvenida.css";
import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import SelectCategoria from "./categoria";
import { useTranslation } from "react-i18next";

function Bienvenida(props) {

  const { t } = useTranslation();


  return (
    <div className="card">
      <div className="flex justify-content-center bg-cyan-500" id="presentacion">
        <div className="flex justify-content-center bg-cyan-500 border-round-top p-8 font-bold text-gray-900">
          <h1 className="font-trivial">{t("trivial")}</h1>
        </div>
        <div className="text-center bg-yellow-500 p-4 font-bold text-gray-900" id="usuario">
          <InputText className="nombre" placeholder={t("nombre")} />
          <div className="flex justify-content-center  mb-auto" id="select-categoria">
            <SelectCategoria className="w-13rem h-full p-3 border-round" id="categoria" setCategoria={props.setCategoria} />
          </div>
          <div className="border-round-top-xl p-2 font-bold text-gray-900" id="botoninicio">
            <Button
              onClick={() => props.setEsPantallaPrincipal(false)}
              type="button"
              label={t("iniciar")}
              icon="pi pi-check"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bienvenida;