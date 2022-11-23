import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import Reloj from "../../acciones/tiempo";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";

//const url = process.env.REACT_APP_API_URL + "/partidas/nuevaPartida/"
  
function Pregunta(props) {
  console.log("botonesArriba", props.preguntas)
  const { i18n } = useTranslation();
  //const respuestaCorrecta = props.pregunta.solucion;
  //const respuesta = props.preguntas[indicePregunta].opciones[i18n.language][respuestaCorrecta];
  const botonesArriba = props.preguntas[props.indicePregunta].opciones[i18n.language].slice(0, 2);
  const botonesAbajo = props.preguntas[props.indicePregunta].opciones[i18n.language].slice(2);
  const [botonSelecionado, setBotonSelecionado] = useState(false);
  const matches = useMediaQuery("(min-width: 992px)");
console.log("partida-pregunta", props.preguntas[props.indicePregunta].pregunta[i18n.language])
console.log("partida-opciones", props.preguntas[props.indicePregunta].opciones[i18n.language])
/* const [jugando, setJugando] = useState()
console.log
  
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(nuevaPartida),
};
fetch(url, requestOptions)
.then(response => response.json())
.then(json => setJugando(json))
 */

  useEffect(() => {
    const pasarPregunta = setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta + 1);
    }, 20000);
    return () => clearTimeout(pasarPregunta);
  }, [props.indicePregunta]);

  if (matches) {
    return (
      <div
        className="grid  w-screen min-h-screen max-h-screen max-w-screen p-5 bg-blue-800"
        style={{ backgroundImage: `url("media/fondo2.jpg")` }}
        id="pregunta"
      >
        <div className="w-full flex-wrap surface-300 border-300 border-primary text-center my-5 max-w-screen h-12rem  border-round-xl p-3 border-3 font-italic shadow-8">
          <h2 className="  text-4xl -mt-1">
            {props.preguntas[props.indicePregunta].pregunta[i18n.language]}
          </h2>
        </div>

        {botonesArriba.map((opcion) => (
          <Boton
            key={opcion}
            id="boton-opcion"
            opcion={opcion}
           // respuesta={respuesta}
            indicePregunta={props.indicePregunta}
            setIndicePregunta={props.setIndicePregunta}
            botonSelecionado={botonSelecionado}
            setBotonSelecionado={setBotonSelecionado}
            partida={props.partida}
            setPartida={props.setPartida}
            preguntas={props.preguntas}
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
          //  respuesta={respuesta}
            indicePregunta={props.indicePregunta}
            setIndicePregunta={props.setIndicePregunta}
            botonSelecionado={botonSelecionado}
            setBotonSelecionado={setBotonSelecionado}
            partida={props.partida}
            setPartida={props.setPartida}
            preguntas={props.preguntas}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div
        className="grid w-screen min-h-screen  max-w-screen p-3 bg-blue-800 font-italic "
        id="pregunta"
        style={{ backgroundImage: `url("media/fondo2.jpg")` }}
      >
        <div className=" w-full flex-wrap surface-300 border-300 text-center my-5 max-w-screen h-12rem  border-round-xl p-3 border-3 border-primary shadow-8">
          <h2 className="text-xl md:text-3xl -mt-1">
            {props.preguntas[props.indicePregunta].pregunta[i18n.language]}
          </h2>
        </div>

        <div className="col-12 flex justify-content-center align-item-center -mt-5">
          {" "}
          <Reloj />
        </div>

        {props.preguntas[props.indicePregunta].opciones[i18n.language].map((opcion) => (
          <Boton
            key={opcion}
            id="boton-opcion"
            opcion={opcion}
         //   respuesta={respuesta}
            indicePregunta={props.indicePregunta}
            setIndicePregunta={props.setIndicePregunta}
            botonSelecionado={botonSelecionado}
            setBotonSelecionado={setBotonSelecionado}
            partida={props.partida}
            setPartida={props.setPartida}
            preguntas={props.preguntas}

          />
        ))}
      </div>
    );
  }
}

export default Pregunta;
