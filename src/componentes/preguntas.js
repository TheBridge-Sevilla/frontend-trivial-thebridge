import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";
import FinPartida from "./fin-partida";


function Preguntas(props) {
  const url = "http://localhost:3050/preguntas/categoria";
  const [preguntas, setPreguntas] = useState([]);
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0)

  useEffect(() => {
    console.log("preguntas dentro del useeffect", preguntas);
    console.log("entra en el useEffect");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria: props.categoria }),
    })
      .then((res) => res.json())
      .then((json) => {
        setPreguntas(json);
      });
  }, [indicePregunta]);

  if (!preguntas.length) {
    return <div>cargando...</div>;
  }
  if (indicePregunta < preguntas.length) {
    return (
      <div className="w-screen h-screen bg-cyan-500 flex align-items-center justify-content-center">
        <Pregunta
          pregunta={preguntas[indicePregunta]}
          setIndicePregunta={setIndicePregunta}
          indicePregunta={indicePregunta}
          puntuacion={puntuacion}
          setPuntuacion={setPuntuacion}
          categoria={props.categoria}
        />
      </div >
    );
  } else {
    return (
      <FinPartida
      indicePregunta={indicePregunta}
      puntuacion={puntuacion}
      esPantallaPrincipal={props.esPantallaPrincipal}
      setEsPantallaPrincipal={props.setEsPantallaPrincipal}
      />

    );
  }
}
export default Preguntas;