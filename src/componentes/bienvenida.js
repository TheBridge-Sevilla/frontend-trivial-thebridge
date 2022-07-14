import "./App.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
//icons
>>>>>>> df46fd8b13f00b731ed93152e0c2fd1ff3e7531f

function Bienvenida(props) {
  const { t } = useTranslation();

  return (
    <div className="contenedorPrincipal">
      <body className="contenedorInicio">
        <h1>{t('trivial')}</h1>
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

export default Bienvenida;
