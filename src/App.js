import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  /* Esta función era para cambiar el nombre al pulsar el boton. la mantengo para poder ver como funciona el hook useStateal incluirle el tiempo.
  const changeName = () => {
    setName("Chikara");
  };
*/
  return (
    <div>
      <label>Jugador:
        <input type="text" name="jugador" /></label>

      <label>Seleccionar categoría:
        <input list="categoria" name="categoria" /></label>
      <datalist id="categoria">
        <option value=""></option>
      </datalist>
      <button onClick={}> Empezar juego </button>

      
    </div>
  

  



    
    


  );
}

export default App;