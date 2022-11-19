import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import { auth, storage } from "./firebase";
import { updateProfile, updatePassword } from "firebase/auth";
import { InputText } from "primereact/inputtext";
import { useTranslation } from "react-i18next";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import UsuarioClasificacion from '../acciones/usuarioClasificacion'
import 'primeicons/primeicons.css';
import { Badge } from 'primereact/badge';
import { Password } from 'primereact/password';
 


function DatosJugador() {
    const { t } = useTranslation();
    const nombreRef = useRef();
    const contraseñaRef = useRef();
    const currentUser = auth.currentUser;
    const [cambioNombre, setCambioNombre] = useState(false)
    const [CambioContraseña, setCambioContraseña] = useState(false)
    const { setTipo, setMensaje } = useContextoUsuario();
    const [loading, setLoading] = useState(false)
    const [foto, setFoto] = useState()
    const [nombre, setNombre] = useState()
    const email = currentUser.email
    const [imagenPerfil, setImagenPerfil] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    const iconoFoto = <img src="https://cdn-icons-png.flaticon.com/512/32/32220.png" />

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
            setFoto(e.target.files[0])
            setLoading(true)
        }

    }
    const handleClick = () => {
        upload(foto, currentUser,)
        setLoading(false)

    }

    return (
        <div className="form flex flex-column ">


            <h2 className='flex align-items-center justify-content-center text-4xl  mb-4 text-primary'>{t("menu")}</h2>

            <label style={{ cursor: 'pointer' }} htmlFor="file-input">
                <div className="relative">
                    <Avatar image={imagenPerfil} referrerPolicy="no-referrer" className="p-overlay-badge block m-auto mb-4 shadow-5 flex align-items-center justify-content-center  " size="xlarge" shape="circle"  >
                        <Badge value={iconoFoto} className="shadow-5" />
                    </Avatar>
                </div>
            </label>
            <input id="file-input" type="file" onChange={handleChange} hidden={true} />
            {loading ? <Button label={t("subir")} onClick={handleClick}></Button> : <></>}
            <p className='flex align-items-center justify-content-center  m-2 bold text-4xl'>{nombre}</p>
            <p className='flex align-items-center justify-content-center  m-3 bold '> {email}</p>
            <UsuarioClasificacion />
            <Button className='flex align-items-center justify-content-center  m-auto my-3 font-bold w-9' label={t("cambiar-nombre")} onClick={() => setCambioNombre(!cambioNombre)}></Button>
            {cambioNombre ? <div className="flex justify-content-center flex-wrap" ><InputText className='flex align-items-center justify-content-center  m-auto font-bold' placeholder={t("nombre")} type="name" ref={nombreRef} />
                <Button className='flex align-items-center justify-content-center  my-2 font-bold p-button-outlined ' type="submit" label={t("actualizar-nombre")} onClick={onSubmitNombre}></Button> </div> : ""}

            <Button  className='flex align-items-center justify-content-center  m-auto mb-2 font-bold w-9' label={t("cambiar-contraseña")} onClick={() => setCambioContraseña(!CambioContraseña)}></Button>
            {CambioContraseña ? <div className='flex justify-content-center flex-wrap ' ><Password  className='flex align-items-center justify-content-center  m-auto font-bold' placeholder={t("contraseña")} type="password" ref={contraseñaRef} toggleMask />
                <Button className='flex align-items-center justify-content-center  my-2 font-bold p-button-outlined  ' type="submit" label={t("actualizar-contraseña")} onClick={onSubmitContraseña}></Button> </div> : ""}
        </div>

    )


}
export default DatosJugador