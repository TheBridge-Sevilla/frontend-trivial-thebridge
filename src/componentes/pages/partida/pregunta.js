import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Boton from "./boton-opciones";
import Reloj from "../../acciones/tiempo";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";

function Pregunta(props) {
  const { i18n } = useTranslation();
  const botonesArriba = props.preguntas[props.indicePregunta].opciones[i18n.language].slice(0, 2);
  const botonesAbajo = props.preguntas[props.indicePregunta].opciones[i18n.language].slice(2);
  const [botonSelecionado, setBotonSelecionado] = useState(false);
  const matches = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    const pasarPregunta = setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta + 1);
    }, 20000);
    return () => clearTimeout(pasarPregunta);
  }, [props.indicePregunta]);

  if (matches) {
    return (
      <div
        className="grid  w-screen min-h-screen max-h-screen max-w-screen p-5"
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
            indicePregunta={props.indicePregunta}
            setIndicePregunta={props.setIndicePregunta}
            botonSelecionado={botonSelecionado}
            setBotonSelecionado={setBotonSelecionado}
            partida={props.partida}
            preguntas={props.preguntas}
          />
        ))}
        <div className="col-12  flex justify-content-center ">
          <Reloj />
        </div>

        {botonesAbajo.map((opcion) => (
          <Boton
            key={opcion}
            id="boton-opcion"
            opcion={opcion}
            indicePregunta={props.indicePregunta}
            setIndicePregunta={props.setIndicePregunta}
            botonSelecionado={botonSelecionado}
            setBotonSelecionado={setBotonSelecionado}
            partida={props.partida}
            preguntas={props.preguntas}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div
        className="grid w-screen min-h-screen  max-w-screen p-3 font-italic "
        id="pregunta"
        style={{ backgroundImage: `url("media/fondo2.jpg")` }}
      >
        <div className=" w-full flex-wrap surface-300 border-300 text-center my-5 max-w-screen h-12rem  border-round-xl p-3 border-3 border-primary shadow-8">
          <h2 className="text-xl md:text-3xl -mt-1">
            {props.preguntas[props.indicePregunta].pregunta[i18n.language]}
          </h2>
        </div>

        <div className="col-12 flex justify-content-center align-item-center -mt-5">
          <Reloj />
        </div>
        {props.preguntas[props.indicePregunta].opciones[i18n.language].map(
          (opcion) => (
            <Boton
              key={opcion}
              id="boton-opcion"
              opcion={opcion}
              indicePregunta={props.indicePregunta}
              setIndicePregunta={props.setIndicePregunta}
              botonSelecionado={botonSelecionado}
              setBotonSelecionado={setBotonSelecionado}
              partida={props.partida}
              preguntas={props.preguntas}
            />
          )
        )}
      </div>
    );
  }
}

export default Pregunta;
