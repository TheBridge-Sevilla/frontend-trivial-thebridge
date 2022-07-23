import './App.css';
import React, { useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Bienvenida from './componentes/bienvenida';
import CambiarIdioma from './componentes/cambiar-idioma';
import Preguntas from './componentes/preguntas';

function App() {
  const [esPantallaPrincipal, setEsPantallaPrincipal] = useState(true);
  const [categoria, setCategoria] = useState("");
  if (esPantallaPrincipal) {
    return (
      <div>
        <CambiarIdioma />
        <Bienvenida esPantallaPrincipal={esPantallaPrincipal}
          setEsPantallaPrincipal={setEsPantallaPrincipal}
          categoria={categoria}
          setCategoria={setCategoria} />
      </div>
    );
  } else {
    return (
        <Preguntas categoria={categoria} />
    );

  }
}

export default App;
