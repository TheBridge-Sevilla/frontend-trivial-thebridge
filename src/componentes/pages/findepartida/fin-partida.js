import React, { useEffect } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import Clasificacion from "../../acciones/clasificacion";
//import {auth} from "../../firebase/firebase";

function FinPartida(props) {
  //const resultado = (props.puntuacion * 100) / props.indicePregunta;
console.log(props.partida)

  const url = process.env.REACT_APP_API_URL + "/partidas/usuario";
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.partida),
    };
    fetch(url, requestOptions).then((response) => response.json());
  }, []);

  return (
    <div className="bg-cyan-500 h-screen w-screen">
      <div className="w-full bg-cyan-500 p-4">
        <div className="w-auto bg-bluegray-100 text-center p-4">
          <div className="card-container text-center text-3xl font-medium">
            Fin de Partida
          </div>
          <div className="card-container text-center text-3xl font-medium">
            Tú puntuación es:
          </div>
        </div>
        <div className="w-full bg-blue-300 text-center">
          <h3>Ranking</h3>
          <Clasificacion categoria={props.categoria} />
        </div>
        <div className="card-container yellow-container p-5">
          <Button
            className="p-button-raised block bg-yellow-500 font-bold text-center p-4 border-round w-auto m-auto"
            onClick={() => props.setEsPantallaPrincipal(true)}
          >
            Volver a jugar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FinPartida;
