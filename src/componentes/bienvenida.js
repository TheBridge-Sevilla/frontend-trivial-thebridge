import "./App.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React from "react";

import PropTypes from "prop-types";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
//icons

function Bienvenida(props) {
  return (
    <div className="contenedorPrincipal">
      <body className="contenedorInicio">
        <h1>TRIVIAL</h1>
        Nombre
        <InputText className="nombre" size={50} />
        <br></br>
        Preguntas
        <InputText className="categoria" size={50} />
        <br></br>
        <Button
          onClick={() => props.setEsPantallaPrincipal(false)}
          id="botoninicio"
          type="button"
          label="Empezar juego"
          icon="pi pi-check"
        ></Button>{" "}
        <br />
      </body>
    </div>
  );
}

Bienvenida.PropTypes = {
  esPantallaPrincipal: PropTypes.bool,
  setEsPantallaPrincipal: PropTypes.func,
};

export default Bienvenida;
