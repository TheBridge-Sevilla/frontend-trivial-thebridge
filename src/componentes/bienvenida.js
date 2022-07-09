
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React, { useState } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"


//icons




function Bienvenida(props) {

    return (

        <div className="flex align-items-center justify-content-center">
            <div className="w-auto bg-white ">
                <div className="text-center mb-5">
                    <div className="text-900 text-3xl font-medium mb-3 p-4">Pregunta de Trivial que es bastante larga la verdad</div>
                    <span className="text-600 font-medium line-height-3">Categoria</span>
                </div>



                <div class="card">
                    <div class="card-container yellow-container">
                        
                        <Button id="boton-opcion" label="opciones" className="p-button-raised  block bg-yellow-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto" />
                        <Button id="boton-opcion" label="opciones" className="p-button-raised  block bg-yellow-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto" />
                        <Button id="boton-opcion" label="opciones" className="p-button-raised  block bg-yellow-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto" />
                        <Button id="boton-opcion" label="opciones" className="p-button-raised  block bg-yellow-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto" />
                        
                    </div>

                </div>
                

            </div>




        </div>


    );
}


export default Bienvenida;