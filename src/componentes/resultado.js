import "./App.css";
//import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

function FinPartida(props) {
  return (
    <div className="card">
      <div className="card-container purple-container m-auto bg-cyan-500">
        <div className="bg-cyan-500 border-round-top p-8 font-bold text-gray-900">
          <h1 className="m-auto">Resultado</h1>
        </div>
        <div className="bg-yellow-500 border-round-top-xl p-8 font-bold text-gray-900">
          <label className="nombre" />
          <br></br>
          <label className="categoria" />
          <br></br>
          <div className="w-13rem h-12 mb-3">
            <ol className="block appearance-none w-full h-full p-3 border-round" id="ranking">
              <li>Programación</li>
              <li>Musica</li>
              <li>Deporte</li>
            </ol>
          </div>
          <div className="border-round-top-xl p-2 font-bold text-gray-900">
          <Button
            onClick={() => props.setEsPantallaPrincipal(false)}
            id="botoninicio"
            type="button"
            label="Volver a jugar"
            icon="pi pi-check"
          ></Button>{" "}
        </div>
      </div>
    </div>
    </div>
  );
}

export default FinPartida;