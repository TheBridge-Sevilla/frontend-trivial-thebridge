import React, { useRef } from "react";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import {createUserWithEmailAndPassword,updateProfile,} from "firebase/auth";
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { auth } from "./firebase"

const Registrarse = () => {
  const emailRef = useRef();
  const nombreRef = useRef();
  const contraseñaRef = useRef();
  const { setUsuario, setDisabledInputText } = useContextoUsuario();

  const registrarUsuario = (email, contraseña, nombre) => {
    createUserWithEmailAndPassword(auth, email, contraseña).then(() => {

      return updateProfile(auth.currentUser, {
        displayName: nombre
      });
    })
      .then(() => {
        setUsuario(auth.currentUser.displayName)
      setDisabledInputText(true)
      })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const nombre = nombreRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (email && contraseña && nombre) registrarUsuario(email, contraseña, nombre);
  };

  return (
    <div className="form">
      <h1 className="text-blue-600"> Crear Cuenta </h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" type="email" ref={emailRef} />
        <InputText placeholder="Nombre" type="name" ref={nombreRef} />
        <Password placeholder="Contraseña" type="password" ref={contraseñaRef} />
        <Button type="submit">Registrarse</Button>
      </form>
    </div>
  );
};

export default Registrarse;