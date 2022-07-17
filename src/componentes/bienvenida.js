import "./App.css";
import React, { useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import PropTypes from 'prop-types';
import SelectCategoria from "./categoria";
//icons

function Bienvenida(props) {
  const [categoria, setCategoria] = useState();

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

Bienvenida.PropTypes = {
  esPantallaPrincipal: PropTypes.bool,
  setEsPantallaPrincipal: PropTypes.func,
};

export default Bienvenida;