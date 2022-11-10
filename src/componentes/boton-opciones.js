import React, { useState } from "react";
import { Button } from "primereact/button";


export default function Boton(props) {
  const [colorBoton, setColorBoton] = useState("surface-300");

  const handleIndicePreguntas = () => {

    if (!props.botonSelecionado) {
      if (props.opcion == props.respuesta) {
        setColorBoton("green-600");
        props.setPuntuacion(props.puntuacion + 1)

      } else {
        setColorBoton("red-600");
      }
      props.setBotonSelecionado(true);

      setTimeout(() => {
        props.setIndicePregunta(props.indicePregunta +1);
        props.setBotonSelecionado(false);

      }, 945)
    }

  };

  return (
    
    <div className="col-12 lg:col-6">
    <Button
      onClick={handleIndicePreguntas}
      id="boton-opcion"
      label={props.opcion}
      className={
        `surface-300 bg-${colorBoton}   font-bold text-center text-blue-600  border-round-2xl p-button-raised m:text-l lg:text-2xl    
        transition-colors transition-duration-500   w-full h-full  border-3 hover:border-blue-900 shadow-8  `
      }
    />
    </div>
    
  );
}
