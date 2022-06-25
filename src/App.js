import logo from './logo.svg';
import './App.css';

import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TRIVIAL</h1>
        <InputText className='nombre' size={50}/>
        <br></br>
        <InputText className='categoria' size={50}/>
        <br></br>
        <Button type="button" label="Empezar juego" icon="pi pi-check"></Button>
      </header>
      
    </div>
  

  );
}

export default App;
