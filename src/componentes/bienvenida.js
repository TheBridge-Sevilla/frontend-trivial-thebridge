import "./App.css";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import SelectCategoria from "./categoria";
import { useTranslation } from "react-i18next";

function Bienvenida(props) {
  const { t } = useTranslation();
  const { categoria, setCategoria } = useState("");

  return (
    <div className="contenedorInicio">
      <h1>{t("trivial")}</h1>
      <h3>{t("nombre")}</h3>
      <InputText className="nombre" size={50} />
      <br></br>
      <h3>{t("elige-categoria")}</h3>
      <label className="categoria" />
      <SelectCategoria setCategoria={setCategoria} />
      {categoria}
      <br></br>
      <Button onClick={() => props.setEsPantallaPrincipal(false)} id="botoninicio"
        type="button" label={t("iniciar")} icon="pi pi-check"
      ></Button>
      <br />
    </div>
  );
}

export default Bienvenida;
