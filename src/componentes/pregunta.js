import React from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
//import Boton from "./boton-opciones";
import Reloj from "./tiempo";
import "./pregunta.css";
import { useTranslation } from "react-i18next";


function Pregunta(props) {

  const { i18n } = useTranslation();

  const handleIndicePreguntas = () => {

    props.setIndicePregunta(props.indicePregunta + 1)

  };

  function tiempoSiguientePregunta() {

    //Se aplica la funcion cada 20000 milisegundos (tiempo por pregunta).
    //Importante el tiempo por pregunta debe coincidir con el del reloj (archivo tiempo.js)

    setInterval(handleIndicePreguntas, 20000);
  }

  tiempoSiguientePregunta()

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="w-auto bg-cyan-600" id="pregunta">
        <div className="w-auto bg-blue-300 text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3 p-4">
            <h2>{props.pregunta.pregunta[i18n.language]}</h2>
          </div>
          <span className="text-600 font-medium line-height-3">Categoria</span>
        </div>
        <div className="card">
          <Reloj />
          <div className="card-container yellow-container">

            {props.pregunta.opciones[i18n.language].map(opcion => (
              <button
                onClick={handleIndicePreguntas} key={opcion}> {opcion}
              </button>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pregunta;
