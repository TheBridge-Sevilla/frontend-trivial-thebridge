import React, { useEffect } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Reloj from "../../acciones/tiempo";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";
import { Button } from 'primereact/button';
import { useOpcion } from './../../customHooks/hook-boton-preguntas'


function Pregunta(props) {
  const { i18n } = useTranslation();
  const botonesArriba = props.preguntas[props.indicePregunta].opciones[i18n.language].slice(0, 2);
  const botonesAbajo = props.preguntas[props.indicePregunta].opciones[i18n.language].slice(2);
  const matches = useMediaQuery("(min-width: 992px)");
  const { Respuesta } = useOpcion(
    props.preguntas,
    props.indicePregunta,
    props.opcion,
    props.partida,
    props.setIndicePregunta
  )

  useEffect(() => {
    const pasarPregunta = setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta + 1);
    }, 20000);
    return () => clearTimeout(pasarPregunta);
  }, [props.indicePregunta]);

  if (matches) {
    return (
      <div
        className="grid w-screen min-h-screen max-h-screen max-w-screen p-5"
        id="pregunta"
      >
        <div className="w-full flex-wrap surface-300 border-300 border-primary text-center my-5 max-w-screen h-12rem  border-round-xl p-3 border-3 font-italic shadow-8">
          <h2 className="text-4xl -mt-1">
            {props.preguntas[props.indicePregunta].pregunta[i18n.language]}
          </h2>
        </div>

        {botonesArriba.map((opcion) => (
          Respuesta(opcion)
        ))}
        <div className="col-12 flex justify-content-center ">
          <Reloj />
        </div>

        {botonesAbajo.map((opcion) => (
          Respuesta(opcion)
        ))}
        <div className="flex  w-full  justify-content-center  ">
          <Button
            icon="pi pi-chevron-left"
            className="p-button-rounded bg-white text-blue-500 mt-3"
            aria-label="Cancel"
            onClick={() => props.setEsPantallaPrincipal(true)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="grid w-screen min-h-screen  max-w-screen p-3 font-italic "
        id="pregunta"
        style={{ backgroundImage: `url("media/fondo2.jpg")` }}
      >
        <div className="flex  w-full  justify-content-end h-1rem">
          <Button
            icon="pi pi-chevron-left"
            className="p-button-rounded bg-white text-blue-500 mt-3"
            aria-label="Cancel"
            onClick={() => props.setEsPantallaPrincipal(true)}
          />
        </div>
        <div className=" w-full flex-wrap surface-300 border-300 text-center my-5
        max-w-screen h-12rem  border-round-xl p-3 border-3 border-primary shadow-8">
          <h2 className="text-xl md:text-3xl -mt-1">
            {props.preguntas[props.indicePregunta].pregunta[i18n.language]}
          </h2>
        </div>
        <div className="col-12 flex justify-content-center align-item-center -mt-5">
          <Reloj />
        </div>
        {props.preguntas[props.indicePregunta].opciones[i18n.language].map(
          (opcion) => (
            Respuesta(opcion)
          )
        )}
      </div>
    );
  }
}

export default Pregunta;
