import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import Reloj from "./tiempo";
import "./Pregunta.css";

function Pregunta() {
  return (
    <div className="flex align-items-center justify-content-center">
      <div className="w-auto bg-cyan-600" id="pregunta">
        <div className="w-auto bg-blue-300 text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3 p-4">
            Pregunta de Trivial que es bastante larga la verdad
          </div>
          <span className="text-600 font-medium line-height-3">Categoria</span>
        </div>

        <div className="card">
        <Reloj />
          <div className="card-container yellow-container">
            <Boton disposicion="correcta" />
            <Boton disposicion="incorrecta"/>
            <Boton disposicion=""/>
            <Boton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pregunta;
