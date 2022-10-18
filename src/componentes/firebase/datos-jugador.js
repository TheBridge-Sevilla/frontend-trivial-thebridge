import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import { auth } from "./firebase";
import { updateProfile } from "firebase/auth";
import { InputText } from "primereact/inputtext";



function DatosJugador() {

    const nombreRef = useRef();
    const [cambioNombre, setCambioNombre] = useState(false)
    const { setTipo, setMensaje } = useContextoUsuario();



    async function cambiarNombre(nombre) {
        return updateProfile(auth.currentUser, {
            displayName: nombre,
        }).catch((error) => {
            console.log(error)
        });

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
        <div>
            <Avatar image={auth.currentUser.photoURL} className="mr-2" size="xlarge" shape="circle" />
            <p>Nombre del Jugador: {auth.currentUser.displayName}</p>
            <p>Email del Jugador: {auth.currentUser.email}</p>
            <p>Partidas Recientes:</p>
            <Button label='Cambiar Nombre' onClick={() => setCambioNombre(!cambioNombre)}></Button>
            {cambioNombre ? <div><InputText placeholder="nombre" type="name" ref={nombreRef} />
                <Button type="submit" label='Actualizar Nombre' onClick={onSubmit}></Button> </div> : ""}
        </div>
    )


}
export default DatosJugador