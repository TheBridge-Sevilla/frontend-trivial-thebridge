import React  from "react";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
//import Boton from "./boton-opciones";
import Reloj from "./tiempo";
import "./pregunta.css";
import { useTranslation } from "react-i18next";

function Pregunta(props) {
  console.log(props.pregunta)
  const { i18n } = useTranslation();
  
 

  const handleIndicePreguntas = (e) => {
    const respuestaCorrecta = props.pregunta.solucion
    const opcionElegida = e.target.innerText
    if (opcionElegida == props.pregunta.opciones[i18n.language][respuestaCorrecta]){
      console.log("Opcion correcta")

    }
    else{

      console.log("has fallado")
    }
  
    setTimeout(() => {
      props.setIndicePregunta(props.indicePregunta + 1);
    }, 1500);
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="w-auto bg-cyan-600" id="pregunta">
        <div className="w-auto bg-blue-300 text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3 p-4">
            <h2>{props.pregunta.pregunta[i18n.language]}</h2>
          </div>
          <span className="text-600 font-medium line-height-3">Categoria</span>
        </div>

        <div className="card">
          <Reloj />
          <div className="card-container yellow-container">
            
            {props.pregunta.opciones[i18n.language].map(opcion => (
                  
                  <Button onClick={handleIndicePreguntas} key={opcion} id="boton-opcion" label={opcion} className="p-button-raised  block bg-yellow-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto" />)
                  
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pregunta;





   


