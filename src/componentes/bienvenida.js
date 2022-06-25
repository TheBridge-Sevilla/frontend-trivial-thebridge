import './App.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React, { useState } from 'react';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
//icons




function Bienvenida(props) {
    return (
        <div className="App">
            <body className="App-header">
                <h1>TRIVIAL</h1>
                <InputText className='nombre' size={50} />
                <br></br>
                <InputText className='categoria' size={50} />
                <br></br>
                <Button onClick={() => props.setEsPantallaPrincipal(false)} id="botoninicio" type="button" label="Empezar juego" icon="pi pi-check"></Button> <br />
            </body>

        </div>
    );
}


export default Bienvenida;