import React, { useRef } from "react";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import {
  createUserWithEmailAndPassword,

  updateProfile,
} from "firebase/auth";
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
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Nombre" type="name" ref={nombreRef} />
        <input placeholder="Contraseña" type="password" ref={contraseñaRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registrarse;