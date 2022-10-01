import React, { useRef } from "react";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const IniciarSesion = () => {
  const emailRef = useRef();
  const contraseñaRef = useRef();
  const { setUsuario, setDisabledInputText } = useContextoUsuario();

  const iniciarSesion = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then(() => {
      setUsuario(auth.currentUser.displayName)
      setDisabledInputText(true)
    })
  }



  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (email && contraseña) iniciarSesion(email, contraseña);
  };



  return (
    <div className="form">
      <h1 className="text-blue-600"> Iniciar Sesión </h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" icon="pi pi-envelope" type="email" ref={emailRef} />
        <InputText placeholder="Contraseña" type="password" ref={contraseñaRef} />
        <Button type="submit">Iniciar Sesión</Button>
      </form>
    </div>
  );
};

export default IniciarSesion;