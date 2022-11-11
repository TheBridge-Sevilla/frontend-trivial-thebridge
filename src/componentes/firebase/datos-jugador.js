import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import { auth, storage } from "./firebase";
import { updateProfile, updatePassword } from "firebase/auth";
import { InputText } from "primereact/inputtext";
import { useTranslation } from "react-i18next";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"





function DatosJugador() {
    const { t } = useTranslation();
    const nombreRef = useRef();
    const contraseñaRef = useRef();
    const currentUser = auth.currentUser;
    const [cambioNombre, setCambioNombre] = useState(false)
    const [CambioContraseña, setCambioContraseña] = useState(false)
    const { setTipo, setMensaje } = useContextoUsuario();
    const [loading, setLoading] = useState(false)
    const [foto, setfoto] = useState()
    const [nombre, setNombre] = useState()
    const email = currentUser.email
    const [imagenPerfil, setImagenPerfil] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")

    //actualizar foto de perfil

    async function upload(file, currentUser) {
        const fileRef = ref(storage, currentUser.uid + '.png');



        await uploadBytes(fileRef, file);
        const fotoURL = await getDownloadURL(fileRef);

        updateProfile(currentUser, { photoURL: fotoURL });
        setImagenPerfil(fotoURL)


        setMensaje(t("imagen-subida"))
        setTipo("success")
    }

    useEffect(() => {
        if (currentUser && currentUser.photoURL) {
            console.log(currentUser.photoURL)
            setImagenPerfil(currentUser.photoURL)
        }
        setNombre(currentUser.displayName)

    }, [auth])


    async function cambiarNombre(nombre) {
        return updateProfile(currentUser, {
            displayName: nombre,
        }).catch((error) => {
            console.log(error)
        });
    }

    async function cambiarContraseña(nuevaContraseña) {
        updatePassword(currentUser, nuevaContraseña).then(() => {
            setMensaje(t("error-contraseña"))
            setTipo("success")
        }).catch(() => {
            setMensaje(t("imagen-subida"))
            setTipo("error")
        });
    }

    function onSubmitNombre(e) {
        e.preventDefault();
        const nombre = nombreRef.current.value
        if (!nombre) {
            setMensaje(t("campos-obligatorios"))
            setTipo("error")
        }
        if (nombre) {
            cambiarNombre(nombre)
            setCambioNombre(!cambioNombre)
            setNombre(nombre)
        }
    }

    function onSubmitContraseña(e) {
        e.preventDefault();
        const contraseña = contraseñaRef.current.value
        if (!contraseña) {
            setMensaje(t("campos-obligatorios"))
            setTipo("error")
        }
        if (contraseña) {
            cambiarContraseña(contraseña)
            setCambioContraseña(!CambioContraseña)
        }
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setfoto(e.target.files[0])
            setLoading(true)
        }

    }
    const handleClick = () => {
        upload(foto, currentUser,)
        setLoading(false)

    }

    return (
        <div>
            <label style={{ cursor: 'pointer' }} htmlFor="file-input">
                <Avatar image={imagenPerfil} referrerPolicy="no-referrer" className="mr-2 shadow-5" size="xlarge" shape="circle" />
            </label>
            <input id="file-input" type="file" onChange={handleChange} hidden="true" />
            {loading ? <Button label={t("subir")} onClick={handleClick}></Button> : <></>}
            <p>{t("nombre-jugador")} :{nombre}</p>
            <p>{t("email")} : {email}</p>
            <p>{t("partidas-recientes")} :</p>
            <Button label={t("cambiar-nombre")} onClick={() => setCambioNombre(!cambioNombre)}></Button>
            {cambioNombre ? <div><InputText placeholder={t("nombre")} type="name" ref={nombreRef} />
                <Button type="submit" label={t("actualizar-nombre")} onClick={onSubmitNombre}></Button> </div> : ""}

            <Button label={t("cambiar-contraseña")} onClick={() => setCambioContraseña(!CambioContraseña)}></Button>
            {CambioContraseña ? <div><InputText placeholder={t("contraseña")} type="password" ref={contraseñaRef} />
                <Button type="submit" label={t("actualizar-contraseña")} onClick={onSubmitContraseña}></Button> </div> : ""}
        </div>
    )


}
export default DatosJugador