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
  const dosOpciones = props.pregunta.opciones[i18n.language].slice(0,2)
  const otrasOpciones = props.pregunta.opciones[i18n.language].slice(2)
  console.log("hola",dosOpciones , otrasOpciones)

  const [botonSelecionado, setBotonSelecionado] = useState(false);

  useEffect(() => {
    const pasarPregunta = setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta  );
    }, 20000);
    return () => clearTimeout(pasarPregunta);
  }, [props.indicePregunta]);

  return (
    <div className="w-full min-h-screen max-h-screen max-w-screen p-3 bg-teal-400" id="pregunta">
      <div className="w-full flex-wrap bg-blue-400 text-center my-5 max-w-screen border-round-xl p-3">
        <h2 className="text-lg md:text-2xl lg:text-4xl">{props.pregunta.pregunta[i18n.language]}</h2>
        <span className="text-purple-800 text-lg line-height-3">{props.categoria.nombre[i18n.language]}</span>
      </div>
      
      
        
        <div className="grid ">
          {dosOpciones.map((opcion) => (
            <Boton
              key={opcion}
              id="boton-opcion"
              opcion={opcion}
              respuesta={respuesta}
              indicePregunta={props.indicePregunta}
              setIndicePregunta={props.setIndicePregunta}
              botonSelecionado={botonSelecionado}
              setBotonSelecionado={setBotonSelecionado}
              puntuacion={props.puntuacion}
              setPuntuacion={props.setPuntuacion}

            />
          ))}
         <div className="lg:col-12 flex justify-content-center align-item-center"> <Reloj/></div>
           {otrasOpciones.map((opcion) => (
            <Boton
              key={opcion}
              id="boton-opcion"
              opcion={opcion}
              respuesta={respuesta}
              indicePregunta={props.indicePregunta}
              setIndicePregunta={props.setIndicePregunta}
              botonSelecionado={botonSelecionado}
              setBotonSelecionado={setBotonSelecionado}
              puntuacion={props.puntuacion}
              setPuntuacion={props.setPuntuacion}

            />
          ))}
        </div>
      
    </div>
  );
}

export default Pregunta;