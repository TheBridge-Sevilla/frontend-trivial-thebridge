import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";
import FinPartida from "../../pages/findepartida/fin-partida";


function Preguntas(props) {
  const url = process.env.REACT_APP_API_URL + "/preguntas/categoria";
  const [preguntas, setPreguntas] = useState([]);
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0)

  useEffect(() => {
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
  }, []);

  if (!preguntas.length) {
    return <div>cargando...</div>;
  }
  if (indicePregunta < preguntas.length) {
    return (
      <div className="w-screen h-screen  flex align-items-center justify-content-center"
      style={{ backgroundImage: `url("media/fondo2.jpg")` }}>
        <Pregunta
          pregunta={preguntas[indicePregunta]}
          setIndicePregunta={setIndicePregunta}
          indicePregunta={indicePregunta}
          puntuacion={puntuacion}
          setPuntuacion={setPuntuacion}
          categoria={props.categoria}
        />
      </div>
    );
  } else {
    return (
      <FinPartida
        indicePregunta={indicePregunta}
        puntuacion={puntuacion}
        esPantallaPrincipal={props.esPantallaPrincipal}
        setEsPantallaPrincipal={props.setEsPantallaPrincipal}
        categoria={props.categoria}
      />
    );
  }
}
export default Preguntas;