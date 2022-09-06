import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import "./fin-partida.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function FinPartida() {

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="w-full bg-cyan-600" id="fin-partida">
        <div className="w-auto bg-bluegray-100 text-center p-5">
          <div className="text-center text-3xl font-medium p-4" id="result-1">
            Fin de Partida
          </div>
          <div className="text-center text-3xl font-medium p-4" id="result-1">
            Tú puntuación es 5/5
          </div>
        </div>
        <div className="w-full bg-blue-300 text-center p-4"><h3>Ranking</h3>

          <div className="w-full flex justify-content-center">

          <DataTable  responsiveLayout="scroll">
                    <Column field="posicion" header="Posición"></Column>
                    <Column field="jugador" header="Jugador"></Column>
                    <Column field="puntos" header="Puntos"></Column>
                    <Column field="categoria" header="Categoria"></Column>
                </DataTable>
          </div>
        </div>
        <div className="card-container yellow-container mb-5 p-5">
          
          <Boton disposicion="correcta" />
          
        </div>
      </div>
    </div>
  );
}

export default FinPartida;