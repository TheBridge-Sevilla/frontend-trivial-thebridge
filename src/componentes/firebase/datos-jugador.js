import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import { auth, storage } from "./firebase";
import { updateProfile } from "firebase/auth";
import { InputText } from "primereact/inputtext";
import {  uploadBytes, ref, getDownloadURL } from "firebase/storage"





function DatosJugador() {

    const nombreRef = useRef();
    const currentUser = auth.currentUser;
    const [cambioNombre, setCambioNombre] = useState(false)
    const { setTipo, setMensaje } = useContextoUsuario();
    const [loading, setLoading] = useState(false)
    const [foto, setfoto] = useState()
    const [nombre, setNombre] = useState()
    const email = currentUser.email
    const [imagenPerfil, setImagenPerfil] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")

    //actualizar foto de perfil

 async function upload(file, currentUser) {
    const fileRef = ref(storage, currentUser.uid + '.png');
  
    setLoading(true);
  
    await uploadBytes(fileRef, file);
    const fotoURL = await getDownloadURL(fileRef);
  
    updateProfile(currentUser, { photoURL: fotoURL });
  
    setLoading(false);
    alert("Uploaded file!");
  }

    useEffect(() => {
        if (currentUser && currentUser.photoURL) {
            console.log(currentUser.photoURL)
            setImagenPerfil(currentUser.photoURL)
        }
        setNombre(currentUser.displayName)




    }, [auth])

/*     useEffect(()=>{
        setImagenPerfil(foto) 
    },[foto])
 */

    async function cambiarNombre(nombre) {
        return updateProfile(currentUser, {
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
            setNombre(nombre)
        }
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setfoto(e.target.files[0])
        }

    }
const handleClick = ()=>{
    upload(foto, currentUser, setLoading)

}

    return (
        <div>
            <Avatar image={imagenPerfil} referrerPolicy="no-referrer" className="mr-2" size="xlarge" shape="circle" />
            <input type="file" onChange={handleChange}></input>
            <Button disabled={loading || !foto} label="subir" onClick={handleClick}></Button>
            <p>Nombre del Jugador: {nombre}</p>
            <p>Email del Jugador: {email}</p>
            <p>Partidas Recientes:</p>
            <Button label='Cambiar Nombre' onClick={() => setCambioNombre(!cambioNombre)}></Button>
            {cambioNombre ? <div><InputText placeholder="nombre" type="name" ref={nombreRef} />
                <Button type="submit" label='Actualizar Nombre' onClick={onSubmit}></Button> </div> : ""}
        </div>
    )


}
export default DatosJugador