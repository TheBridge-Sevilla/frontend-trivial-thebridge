import React, { useState } from "react";
import { Button } from "primereact/button";

export default function Boton(props) {
  const [colorBoton, setColorBoton] = useState("yellow");

  
  const handleIndicePreguntas = () => {
    if (props.opcion == props.respuesta) {
      setColorBoton("green");
    } else {
      setColorBoton("red");
    }
    const botones = document.getElementsByTagName("button");
    for (const boton of botones) {
      boton.disabled=true;

    }

    setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta + 1);
    }, 1500);
  };

  return (
    <Button
      onClick={handleIndicePreguntas}
      id="boton-opcion"
      label={props.opcion}
      className={
        "p-button-raised  block bg-" +
        colorBoton +
        "-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto"
      }
    />
  );
}
