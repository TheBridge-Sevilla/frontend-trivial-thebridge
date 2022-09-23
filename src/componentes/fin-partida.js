import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import Clasificacion from "./clasificacion";


function FinPartida(props) {
let resultado = props.puntuacion*100/props.indicePregunta

  return (
    <div className="scalein animation-duration-500 animation-iteration-1 bg-cyan-600 h-screen w-screen">
      <div className="w-full bg-cyan-600 p-4">
        <div className="w-auto bg-bluegray-100 text-center p-4">
          <div className="card-container text-center text-3xl font-medium">
            Fin de Partida
          </div>
          <div className="card-container text-center text-3xl font-medium">
            Tú puntuación es: {props.puntuacion + "/" + props.indicePregunta}
            <div className="bg-yellow-500 border-circle card-container text-center text-3xl font-medium"> {resultado} </div>
          </div>
        </div>
        <div className="w-full bg-blue-300 text-center"><h3>Ranking</h3>
          <Clasificacion
            categoria={props.categoria} />
        </div>
        <div className="card-container yellow-container p-5">
          <Button className="p-button-raised block bg-yellow-500 font-bold text-center p-4 border-round w-auto m-auto"
            onClick={() => props.setEsPantallaPrincipal(true)}
          >Volver a jugar
          </Button>
        </div>
      </div>
    </div >
  );
}


export default FinPartida;