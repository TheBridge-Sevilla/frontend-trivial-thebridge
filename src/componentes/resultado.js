import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import "./Ranking.css";

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

            <table id="tabla">
              <tr><th>Posición</th><th>Jugador</th><th>Puntos</th><th>Categoria</th></tr>
              <tr><td># 100</td><td>Jugador 123456123131345</td><td>5/10</td><td>Programación</td></tr>
              <tr><td># 1</td><td>Jugador 1</td><td>5/5</td><td>Música</td></tr>
              <tr><td># 2</td><td>Jugador 2</td><td>4/5</td><td>Deporte</td></tr>
            </table>
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