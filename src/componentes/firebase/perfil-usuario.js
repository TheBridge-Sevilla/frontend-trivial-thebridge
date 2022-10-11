import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import { auth } from "./firebase";
import { updateProfile } from "firebase/auth";
import { InputText } from "primereact/inputtext";



function PerfilUsuario() {

    const { usuario, setTipo, setMensaje } = useContextoUsuario();
    const nombreRef = useRef();
    const [visibleLeft, setVisibleLeft] = useState(false)
    const [cambioNombre, setCambioNombre] = useState(false)

    async function cambiarNombre(nombre) {
       return updateProfile(auth.currentUser, {
            displayName: nombre,
        }).catch((error) => {
         console.log(error)
          });

    }

    const abrirPerfil =()=>{
        setVisibleLeft(!visibleLeft)
        setCambioNombre(false)
    }

    function onSubmit(e) {
        e.preventDefault();
        const nombre = nombreRef.current.value
        if (!nombre) {
            setMensaje("Rellene Los Campos Obligatorios")
            setTipo("error")
        }
        if (nombre) {
            cambiarNombre(nombre)
            setCambioNombre(!cambioNombre)
            console.log(cambioNombre)
            console.log(nombre)

        }



    }



    return (
        <div className='card'>
            <Sidebar visible={visibleLeft} className="p-sidebar-sm" position="left" onHide={() => setVisibleLeft(false)}>
                <div className='flex flex-column justify-content-center '>
                    {usuario ?
                        <div><p>Nombre del Jugador: {auth.currentUser.displayName}</p>
                            <p>Email del Jugador: {auth.currentUser.email}</p>
                            <p>Partidas Recientes:</p>
                            <Button label='Cambiar Nombre' onClick={() => setCambioNombre(!cambioNombre)}></Button>
                            {cambioNombre ? <div><InputText placeholder="nombre" type="name" ref={nombreRef} />
                                <Button type="submit" label='Actualizar Nombre' onClick={onSubmit}></Button> </div> : "" }
                        </div>
                        : ""}

                </div>
            </Sidebar>
            {usuario ? <Button icon="pi pi-user" onClick={() => abrirPerfil()} tooltipOptions={{ position: 'left' }} className="mx-2" /> : ""}
        </div>
    );
}


export default PerfilUsuario