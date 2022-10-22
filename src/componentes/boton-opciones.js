import React, { useState } from "react";
import { Button } from "primereact/button";


export default function Boton(props) {
  const [colorBoton, setColorBoton] = useState("yellow");

  const handleIndicePreguntas = () => {

    if (!props.botonSelecionado) {
      if (props.opcion == props.respuesta) {
        setColorBoton("green");
        props.setPuntuacion(props.puntuacion + 1)

      } else {
        setColorBoton("red");
      }
      props.setBotonSelecionado(true);

      setTimeout(() => {
        props.setIndicePregunta(props.indicePregunta +1);
        props.setBotonSelecionado(false);

      }, 945)
    }

  };

  return (
    <div className="col-12 lg:col-6 flex justify-content-center align-item-center ">
    <Button
      onClick={handleIndicePreguntas}
      id="boton-opcion"
      label={props.opcion}
      className={
        `font-bold text-center  border-round  p-button-raised    bg-${colorBoton} 
        transition-colors transition-duration-500 hover:border-300 w-full h-full   `
      }
    />
    </div>
  );
}
