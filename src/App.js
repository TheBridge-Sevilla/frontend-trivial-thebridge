import React, { useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";
import Bienvenida from './componentes/pages/bienvenida/bienvenida';
import Preguntas from './componentes/pages/partida/preguntas';


function App() {
  const [esPantallaPrincipal, setEsPantallaPrincipal] = useState(true);
  const [categoria, setCategoria] = useState(false);
  if (esPantallaPrincipal) {
    return (
      <Bienvenida
        esPantallaPrincipal={esPantallaPrincipal}
        setEsPantallaPrincipal={setEsPantallaPrincipal}
        categoria={categoria}
        setCategoria={setCategoria} />
    );
  } else {
    return (
      <Preguntas categoria={categoria} setEsPantallaPrincipal={setEsPantallaPrincipal} setCategoria={setCategoria} />
    );
  }
}

export default App;