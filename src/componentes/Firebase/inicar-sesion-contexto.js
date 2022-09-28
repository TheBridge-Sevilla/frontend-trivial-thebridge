import React, { useRef } from "react";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { signInWithEmailAndPassword, sendPasswordResetEmail, } from "firebase/auth";
import { auth } from "./firebase"
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const IniciarSesion = () => {
  const emailRef = useRef();
  const contraseñaRef = useRef();
  const { setUsuario } = useContextoUsuario();

  const iniciarSesion = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then(() => {
      setUsuario(auth.currentUser.displayName)
    })
  }

  const contraseñaOlvidada = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (email && contraseña) iniciarSesion(email, contraseña);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      contraseñaOlvidada(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h1 className="text-blue-600"> Login </h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" icon="pi pi-envelope" type="email" ref={emailRef} />
        <Password placeholder="Contraseña" type="password" ref={contraseñaRef} />
        <Button type="submit">Iniciar sesion</Button>
        <p className="cursor-pointer" onClick={forgotPasswordHandler}>Contraseña olvidada?</p>
      </form>
    </div>
  );
};

export default IniciarSesion;