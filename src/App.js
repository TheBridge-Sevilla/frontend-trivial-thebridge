import './App.css';
import React, { useState } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Bienvenida from './componentes/bienvenida';
import Inicio from './componentes/inicio';
//icons



function App() {
  const [esPantallaPrincipal, setEsPantallaPrincipal] = useState(true);
  if (esPantallaPrincipal) {
    return (
      <React.StrictMode>
        <Bienvenida esPantallaPrincipal={esPantallaPrincipal} setEsPantallaPrincipal={setEsPantallaPrincipal} />
      </React.StrictMode>
    );
  } else {
    return (
      <React.StrictMode>
        <Inicio />
      </React.StrictMode>
    );

  }
}

export default App;
