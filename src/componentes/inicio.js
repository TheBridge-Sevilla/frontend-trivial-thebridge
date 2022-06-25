import './App.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React, { useState } from 'react';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
//icons




function Inicio() {
    return (

        <body>
            <div className="contenedor">
                <h1>INICIO</h1>
                <InputText className='nombre' size={50} />
                <br></br>
                <InputText className='categoria' size={50} />
                <br></br>
                <InputText className='categoria' size={50} />
                <br></br>
                <InputText className='categoria' size={50} />

            </div>
        </body>
    );
}


export default Inicio;