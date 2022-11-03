import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import Reloj from "./tiempo";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";
import fondoTrivial from "../imagen/fondoTrivial.png";

function Pregunta(props) {
  const { i18n } = useTranslation();
  const respuestaCorrecta = props.pregunta.solucion;
  const respuesta = props.pregunta.opciones[i18n.language][respuestaCorrecta];
  const botonesArriba = props.pregunta.opciones[i18n.language].slice(0, 2);
  const botonesAbajo = props.pregunta.opciones[i18n.language].slice(2);

  const [botonSelecionado, setBotonSelecionado] = useState(false);
  const matches = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    const pasarPregunta = setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta);
    }, 20000);
    return () => clearTimeout(pasarPregunta);
  }, [props.indicePregunta]);

  if (matches) {
    return (
      <div
        className="grid  w-screen min-h-screen max-h-screen max-w-screen p-5 bg-blue-800"
        style={{ backgroundImage: `url(${fondoTrivial})` }}
      

        
        id="pregunta"
      >
        <div className="w-full flex-wrap surface-300 border-300  text-center my-5 max-w-screen border-round-xl p-3">
          <h2 className="text-lg md:text-2xl lg:text-5xl">
            {props.pregunta.pregunta[i18n.language]}
          </h2>
         {/*  <span className="text-purple-800 text-lg line-height-3">
            {props.categoria.nombre[i18n.language]}
          </span> */}
        </div>

        {botonesArriba.map((opcion) => (
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
        <div className="col-12  flex justify-content-center ">
          {" "}
          <Reloj />
        </div>

        {botonesAbajo.map((opcion) => (
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
    );
  } else {
    return (
      <div
        className="grid w-screen min-h-screen  max-w-screen p-3 bg-blue-800"
        id="pregunta"
      >
        <div className=" w-full flex-wrap surface-300 border-300 text-center my-5 max-w-screen border-round-xl p-3">
          <h2 className="text-lg md:text-2xl lg:text-4xl">
            {props.pregunta.pregunta[i18n.language]}
          </h2>
         {/*  <span className="text-purple-800 text-lg line-height-3 ">
            {props.categoria.nombre[i18n.language]}
          </span>  */}
          </div>
       
          <div className="col-12 flex justify-content-center align-item-center">
            {" "}
            <Reloj />
          </div>
          
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
                puntuacion={props.puntuacion}
                setPuntuacion={props.setPuntuacion}
              />
            ))}
        </div>
      
    );
  }
}

export default Pregunta;
