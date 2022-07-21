import './App.css';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
//icons


function Inicio() {
    return (

        <div id="contenedor">
            <h1>Preguntas</h1>
            <div id="contenedorPreguntas">
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                <br></br>
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                <br></br>
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                <br></br>
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
            </div>

        </div>
    )
}

export default Inicio;