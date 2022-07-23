import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";

function Preguntas(props) {
  const url = "http://localhost:3050/preguntas/categoria";
  const [preguntas, setPreguntas] = useState([]);
  console.log(props.categoria);
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria: props.categoria }),
    })
      .then((res) => res.json())
      .then((json) => setPreguntas(json));
  });
  return (
    <p>
      {preguntas.map((pregunta) => (
        <Pregunta key={pregunta} pregunta = {pregunta}/>
      ))}
    </p>
  );
}

export default Preguntas;
