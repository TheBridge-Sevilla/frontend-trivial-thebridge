import React, { useState, useEffect } from "react";
import Pregunta from "./pregunta";
import FinPartida from "../../pages/findepartida/fin-partida";
import { auth } from "../../firebase/firebase";
import { useContextoUsuario } from "./../../contexto/contextoUsuario";

function Preguntas(props) {
  const url = process.env.REACT_APP_API_URL + "/preguntas/categoria";
  const [preguntas, setPreguntas] = useState([]);
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [partida, setPartida] = useState();
  const { usuario } = useContextoUsuario();

  useEffect(() => {
    console.log("preguntas dentro del useeffect", preguntas);
    console.log("entra en el useEffect");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuario: auth.currentUser != null ? auth.currentUser.uid : undefined, //id del usuario Firebase
        nombre: auth.currentUser ? auth.currentUser.displayName : usuario,
        categoria: props.categoria._id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setPartida(json); //Almacena el id de la partida
        setPreguntas(json.quiz); // Almacena un array con objetos de preguntas y opciones
      });
  }, []);

  if (!preguntas.length) {
    return <div>cargando...</div>;
  }
  if (indicePregunta < preguntas.length) {
    return (
      <div
        className="w-screen h-screen  flex align-items-center justify-content-center"
        style={{ backgroundImage: `url("media/fondo2.jpg")` }}
      >
        <Pregunta
          preguntas={preguntas}
          setIndicePregunta={setIndicePregunta}
          indicePregunta={indicePregunta}
          partida={partida}
        />
      </div>
    );
  } else {
    return (
      <FinPartida
        indicePregunta={indicePregunta}
        partida={partida}
        esPantallaPrincipal={props.esPantallaPrincipal}
        setEsPantallaPrincipal={props.setEsPantallaPrincipal}
      />
    );
  }
}
export default Preguntas;
