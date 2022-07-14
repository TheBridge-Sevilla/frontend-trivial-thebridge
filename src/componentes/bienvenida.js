import "./App.css";
import React, { useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import PropTypes from 'prop-types';
import SelectCategoria from "./categoria";
import { useTranslation } from "react-i18next";

function Bienvenida(props) {
  const { t } = useTranslation();

  return (
    <div className="contenedorPrincipal">
      <body className="contenedorInicio">
        <h1>{t('trivial')}</h1>
        <h3>Nombre</h3>
        <InputText className="nombre" size={50} />
        <br></br>
        <h3>Elige la categoria</h3>
        <label className="categoria" />
        <SelectCategoria setCategoria={setCategoria} />
        {categoria}
        <br></br>
        <Button
          onClick={() => props.setEsPantallaPrincipal(false)}
          id="botoninicio"
          type="button"
          label="Empezar juego"
          icon="pi pi-check"
        ></Button>{" "}
        <br />
      </body >
    </div >
  );
}

export default Bienvenida;