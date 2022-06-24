import { useState, useEffect } from "react";

function SiguientePregunta() {
  const [pregunta, setPregunta] = useState(0);


  useEffect(() => {
    console.log(`You have clicked the button ${pregunta} times`)
  });

  return (
    <div>
      <p id="pregunta">¿Porqué preguntar?</p>
      <button onClick={() => setPregunta(pregunta)}>Opcion 1</button>
      <button onClick={() => setPregunta(pregunta)}>Opcion 2</button>
      <button onClick={() => setPregunta(pregunta)}>Opcion 3</button>
      <button onClick={() => setPregunta(pregunta)}>Opcion 4</button>
    </div>
  );
}

export default SiguientePregunta;
/*
//Opcion 2 con fetch
function useFetchPregunta(url) {
  const [pregunta, setPregunta] = useState(null);

  useEffect(() => {
    fetch('mongodb+srv://clasethebridge22:mLgHGXeGF84nWNDu@trivialthebridge.od1ucz1.mongodb.net/trivial/preguntas?retryWrites=true&w=majority')
      .then((res) => res.json())
      .then((pregunta) => setPregunta(pregunta))
      .catch((err) => console.log(`Error: ${err}`));
  }, [url]);

  return { pregunta };
}

export default useFetchPregunta


opcion 3

class Preguntas extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line



    // Change code above this line
  }
};
*/