import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
//import { useTranslation } from "react-i18next";

export default function Boton(props) {
  const [colorBoton, setColorBoton] = useState("surface-300");
  //  const { i18n } = useTranslation();
  const [comprobacion, setComprobacion] = useState();

  console.log("partida-botoon", props.partida);
  //let indiceBotones = props.preguntas[props.indicePregunta].opciones[i18n.language].indexOf(props.opcion)

  //const [seguimiento, setSeguimiento] = useState()

  //setSeguimiento(props.preguntas[props.indicePregunta].opciones[i18n.language].indexOf(props.opcion))

  let prueba = {
    id: props.partida.id,
    pregunta: props.partida.quiz[props.indicePregunta].id,
    indice: props.indicePregunta,
  };
  console.log("prueba", prueba);
  //props.jugando.seguimiento.comprobacion.push(props.pregunta.opciones[i18n.language].indexOf(props.opcion))

  const url = process.env.REACT_APP_API_URL + "/preguntas/respuesta";

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
  }, []);

  const handleIndicePreguntas = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify({prueba}),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setComprobacion(json));

    if (!props.botonSelecionado) {
      if (props.opcion == comprobacion) {
        setColorBoton("green-400");
      } else {
        setColorBoton("red-400");
      }
      props.setBotonSelecionado(true);

      setTimeout(() => {
        props.setIndicePregunta(props.indicePregunta + 1);
        props.setBotonSelecionado(false);
      }, 945);
    }
  };

  return (
    <div className="col-12 lg:col-6">
      <Button
        onClick={handleIndicePreguntas}
        id="boton-opcion"
        label={props.opcion}
        className={`surface-300 bg-${colorBoton}   font-bold text-center text-blue-600  border-round-2xl p-button-raised m:text-l lg:text-2xl    
        transition-colors transition-duration-500   w-full h-full  border-3 hover:border-blue-900 shadow-8  `}
      />
    </div>
  );
}
