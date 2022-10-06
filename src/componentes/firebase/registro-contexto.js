import React, { useRef } from "react";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { auth } from "./firebase"
import { Toast } from 'primereact/toast';




const Registrarse = () => {
  const emailRef = useRef();
  const nombreRef = useRef();
  const contraseñaRef = useRef();
  const toast = useRef(null);
  const { setUsuario, setDisabledInputName, setVisibleTop, setDisplayResponsive, mensaje, setMensaje } = useContextoUsuario();

  const showSuccess = (error) => {
    toast.current.show({ severity: 'error', summary: 'Error ', detail: `${error}`, life: 3000 });
  }

  const registrarUsuario = (email, contraseña, nombre) => {
    createUserWithEmailAndPassword(auth, email, contraseña).then(() => {

      return updateProfile(auth.currentUser, {
        displayName: nombre
      });
    })
      .then(() => {
        setUsuario(auth.currentUser.displayName)
        setDisabledInputName(true)
      })
  }
  

  async function onSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const nombre = nombreRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (!email || !nombre || !contraseña) {
      setMensaje("Error Al Crear La Cuenta")

      console.log(mensaje)
      showSuccess(mensaje)

    }

    if (email && contraseña && nombre) {
      await registrarUsuario(email, contraseña, nombre);
      setVisibleTop(false)
      setDisplayResponsive(false)
    }
  }

  

  return (
    <div className="form">
      <h1 className="text-blue-600"> Crear Cuenta </h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" type="email" ref={emailRef} />
        <InputText placeholder="Nombre" type="name" ref={nombreRef} />
        <InputText placeholder="Contraseña" type="password" ref={contraseñaRef} />
        <Button type="submit">Registrarse</Button>
      </form>
      <Toast ref={toast} />
    </div>
  );
};

export default Registrarse;