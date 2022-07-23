import React from "react";
import { Button } from "primereact/button";

export default function Boton(props) {
  if (!props.disposicion) {
    return (

      <Button
        id="boton-opcion"
        label="opciones"
        className="p-button-raised  block bg-bluegray-100 font-bold text-center p-4 border-round mb-3 w-8 m-auto"
      />
    );
  }
  if (props.disposicion == "correcta") {
    return (

      <Button
        id="boton-opcion"
        label="opciones"
        className="p-button-raised  block bg-green-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto"
      />
    );
  }
  if (props.disposicion == "incorrecta") {
    return (

      <Button
        id="boton-opcion"
        label="opciones"
        className="p-button-raised  block bg-red-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto"
      />
    );
  }
}
