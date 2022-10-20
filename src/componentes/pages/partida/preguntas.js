import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";
import FinPartida from "../../pages/findepartida/fin-partida";


function Preguntas(props) {
  const url = process.env.REACT_APP_API_URL + "/preguntas/categoria";
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
      body: JSON.stringify({ id: props.categoria._id }),
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
      <>
        <Pregunta
          pregunta={preguntas[indicePregunta]}
          setIndicePregunta={setIndicePregunta}
          indicePregunta={indicePregunta}
          puntuacion={puntuacion}
          setPuntuacion={setPuntuacion}
          categoria={props.categoria}
        />
      </>
    );
  } else {
    return (
      <FinPartida
        indicePregunta={indicePregunta}
        puntuacion={puntuacion}
        esPantallaPrincipal={props.esPantallaPrincipal}
        setEsPantallaPrincipal={props.setEsPantallaPrincipal}
        setCategoria={props.setCategoria}
      />
    );
  }
}
export default Preguntas;