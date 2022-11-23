import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";
import FinPartida from "../../pages/findepartida/fin-partida";

//Obtenemos datos para el backend
import {auth} from "../../firebase/firebase";

function Preguntas(props) {
  const url = process.env.REACT_APP_API_URL + "/preguntas/categoria";
  const [preguntas, setPreguntas] = useState([]); // Almacena un array con objetos de preguntas y opciones
  const [indicePregunta, setIndicePregunta] = useState(0); 
  const [partida, setPartida] = useState() //Almacena el id de la partida

  useEffect(() => {
    console.log("preguntas dentro del useeffect", preguntas);
    console.log("entra en el useEffect");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      idUsuario: auth.currentUser.uid, 
      nombre: auth.currentUser.displayName,
      categoria: props.categoria._id, }),
    })
      .then((res) => res.json())
      .then((json) => {setPartida(json.id); //Almacena el id de la partida
        setPreguntas(json.quiz); // Almacena un array con objetos de preguntas y opciones
      });
  },[]);

//  console.log("partida", partida)
 console.log(preguntas.length, "Preguntas")

  if (!preguntas.length) {
    return <div>cargando...</div>;
  }
  if (indicePregunta < preguntas.length) {
    return (
      <div className="w-screen h-screen  flex align-items-center justify-content-center">
        <Pregunta

          setIndicePregunta={setIndicePregunta}
          indicePregunta={indicePregunta}
          partida={partida}
          setPartida={setPartida}
          preguntas={preguntas}
        />
      </div>
    );
  } else {
    return (
      <FinPartida
        indicePregunta={indicePregunta}
        esPantallaPrincipal={props.esPantallaPrincipal}
        setEsPantallaPrincipal={props.setEsPantallaPrincipal}
        partida={partida}
        setPartida={setPartida}

      />
    );
  }
}
export default Preguntas;