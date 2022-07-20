import "./App.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";

function Bienvenida(props) {
  const [displayDialog, setDisplayDialog] = useState(true);
  const options = [
    "Programación",
    "Musica",
    "Deporte"
  ];

  const dialogFooter = (
    <div>
      <Button
        type="button"
        label="Close"
        icon="pi pi-times"
        onClick={() => {
          setDisplayDialog(false);
        }}
        className="p-button-text"
      />
      <Button
        value={"Add"}
        type="button"
        label="Add"
        icon="pi pi-check"
        autoFocus
      />
    </div>
  );

  return (
    <div className="card" id="app">
      <div className="card-container purple-container bg-cyan-500" id="contenedor">
        <div className="bg-cyan-500 border-round-top p-8 font-bold text-gray-900">
          <h1 className="titulo">TRIVIAL</h1>
        </div>
        <div className="" id="usuario">
          <div className="block appearance-none w-1.2rem h-1.2rem p-3 border-round">
            <InputText className="nombre" id="jugador" placeholder="Nombre" />

            <div className="categorias">
              <div style={{ height: "auto" }}>
                <Button id="btn-categoria" label="Show dialog" onClick={() => setDisplayDialog(true)} />
                <Dialog
                  className="min-w-min"
                  style={{ width: "60%" }}
                  visible={displayDialog}
                  header="Elegir Categorias"
                  onHide={() => {
                    setDisplayDialog(false);
                  }}
                  resizable={false}
                  draggable={false}
                  footer={dialogFooter}
                >
                  <Dropdown style={{ width: "100%" }} options={options}></Dropdown>
                </Dialog>
              </div>
            </div>

          </div>
          <div className="border-round-top-xl p-2 font-bold text-gray-900" id="botoninicio">
            <Button id="btn-empezar"
              onClick={() => props.setEsPantallaPrincipal(false)}
              type="button"
              label="Entar"
            ></Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;