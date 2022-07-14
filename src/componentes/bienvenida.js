import "./App-inicio.css";
import { InputText } from "primereact/inputtext";
//import { Button } from "primereact/button";
import React from "react";


function Bienvenida(props) {
  return (
    <div className="cuerpo">
      <div className="contenedor">
        <div className="presentacion">
          <h1 className="trivial">TRIVIAL</h1>

        </div>
        <div className="jugador">

          <InputText className="nombre" placeholder="Nombre" />
          <br></br>
          <InputText className="categoria" placeholder="Categorias" />
          <br></br>
          <div className="seleccion-categoria">
            <select className="selector" id="categoria">
              <option>Programación</option>
              <option>Musica</option>
              <option>Deporte</option>
            </select>
          </div>
          <div className="boton-inicio">
            <button
              onClick={() => props.setEsPantallaPrincipal(false)}
              id="botoninicio"
              type="button"
              label="Entar"
              icon="pi pi-check"
            >Entrar</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;
