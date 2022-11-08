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
    
    <div className="col-12 lg:col-6  ">
    <Button
      onClick={handleIndicePreguntas}
      id="boton-opcion"
      label={props.opcion}
      className={
        `font-bold text-center text-blue-600  border-round-2xl p-button-raised m:text-l lg:text-2xl   bg-${colorBoton} 
        transition-colors transition-duration-500 hover:border-300 w-full h-full surface-300 border-3 shadow-8  `
      }
    />
    </div>
    
  );
}
