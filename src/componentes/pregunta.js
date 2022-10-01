import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import Reloj from "./tiempo";
import { useTranslation } from "react-i18next";

function Pregunta(props) {
  const { i18n } = useTranslation();
  const respuestaCorrecta = props.pregunta.solucion;
  const respuesta = props.pregunta.opciones[i18n.language][respuestaCorrecta];

  const [botonSelecionado, setBotonSelecionado] = useState(false);

  useEffect(() => {
    const pasarPregunta = setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta + 1);
    }, 20000);
    return () => clearTimeout(pasarPregunta);
  }, [props.indicePregunta]);

  return (
    <div className="w-full min-h-screen bg-cyan-500" id="pregunta">
      <div className="w-full flex-wrap bg-yellow-500 text-center mb-5 border-round-xl p-3">
        <span className="text-purple-800 text-lg line-height-3">{props.categoria}</span>
        <h2 className="text-lg md:text-2xl lg:text-4xl">{props.pregunta.pregunta[i18n.language]}</h2>
      </div>
      <div className="card">
        <div id="reloj" className="mb-3">
          <Reloj />
        </div>
        <div className="card-container yellow-container flex-column">
          {props.pregunta.opciones[i18n.language].map((opcion) => (
            <Boton
              key={opcion}
              id="boton-opcion"
              opcion={opcion}
              respuesta={respuesta}
              indicePregunta={props.indicePregunta}
              setIndicePregunta={props.setIndicePregunta}
              botonSelecionado={botonSelecionado}
              setBotonSelecionado={setBotonSelecionado}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pregunta;