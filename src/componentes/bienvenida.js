import "./bienvenida.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

function Bienvenida(props) {
  return (
    <div className="card">
      <div className="flex justify-content-center bg-cyan-500" id="presentacion">
        <div className="flex justify-content-center bg-cyan-500 border-round-top p-8 font-bold text-gray-900">
          <h1 className="">TRIVIAL</h1>
        </div>
        <div className="text-center bg-yellow-500 p-4 font-bold text-gray-900" id="usuario">
          <InputText className="nombre" placeholder="Nombre" />
          <div className="flex justify-content-center  mb-auto" id="select-categoria">
            <select className="w-13rem h-full p-3 border-round" id="categoria">
              <option>Programación</option>
              <option>Musica</option>
              <option>Deporte</option>
            </select>
          </div>
          <div className="border-round-top-xl p-2 font-bold text-gray-900" id="botoninicio">
            <Button
              onClick={() => props.setEsPantallaPrincipal(false)}
              type="button"
              label="Entar"
              icon="pi pi-check"
            ></Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;