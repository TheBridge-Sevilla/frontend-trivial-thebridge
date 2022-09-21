import React, { useRef } from "react";
import { useContextoUsuario } from "../contexto/contextoUsuario";

const IniciarSesion = () => {
  const emailRef = useRef();
  const contraseñaRef = useRef();
  const { iniciarSesion, contraseñaOlvidada } = useContextoUsuario();

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
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Contraseña" type="password" ref={contraseñaRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default IniciarSesion;