import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";

function Preguntas(props) {
  const url = "http://localhost:3050/preguntas/categoria";
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    console.log("entra en el useEffect");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria: props.categoria }),
    })
      .then((res) => res.json())
      .then((json) => setPreguntas(json));
  }, []);
  return (
    <div>
      {preguntas.map((pregunta) => (
        <Pregunta key={pregunta.Pregunta} pregunta={pregunta} />
      ))}
    </div>
  );
}

export default Preguntas;
