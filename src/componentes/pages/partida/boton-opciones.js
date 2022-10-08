import React, { useState } from "react";
import { Button } from "primereact/button";


export default function Boton(props) {
  const [colorBoton, setColorBoton] = useState("bluegray-200");

  const handleIndicePreguntas = () => {

    if (!props.botonSelecionado) {
      if (props.opcion == props.respuesta) {
        setColorBoton("green-500");
        props.setPuntuacion(props.puntuacion + 1)

      } else {
        setColorBoton("red-500");
      }
      props.setBotonSelecionado(true);

      setTimeout(() => {
        props.setIndicePregunta(props.indicePregunta + 1);
        props.setBotonSelecionado(false);

      }, 945)
    }

  };

  return (
    <Button
      onClick={handleIndicePreguntas}
      id="boton-opcion"
      label={props.opcion}
      className={
        `font-bold text-center p-4 border-round mb-3 w-8 m-auto p-button-raised block bg-${colorBoton}
        transition-colors transition-duration-500 hover:border-300`
      }
    />
  );
}
