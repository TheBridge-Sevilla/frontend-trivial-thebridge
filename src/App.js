import './App.css';
import React, { useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Bienvenida from './componentes/bienvenida.js';
import Pregunta from './componentes/pregunta'
import CambiarIdioma from './componentes/cambiarIdioma';
//icons



function App() {
  const [esPantallaPrincipal, setEsPantallaPrincipal] = useState(true);
  if (esPantallaPrincipal) {
    return (
      <React.StrictMode>
      <CambiarIdioma />
      <Bienvenida esPantallaPrincipal={esPantallaPrincipal} setEsPantallaPrincipal={setEsPantallaPrincipal} />
</React.StrictMode>
    );
  } else {
    return (
      <React.StrictMode>
      <CambiarIdioma />
      <Pregunta />
      </React.StrictMode>
    );

  }
}

export default App;
