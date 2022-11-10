import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



const IniciarSesion = () => {
  const { t } = useTranslation();
  const emailRef = useRef();
  const contraseñaRef = useRef();

  const { usuario,
    setUsuario,
    setDisabledInputName,
    setVisibleTop,
    setDisplayResponsive,

    setMensaje,

    setTipo
  } = useContextoUsuario();

  const iniciarSesion = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then(() => {
      setUsuario(auth.currentUser.displayName)
      setDisabledInputName(true)
    }).catch((e) => {
      if (e.code == "auth/user-not-found") {
        setMensaje("Email No Registrado")
        setTipo("error")
      }
      if (e.code == "auth/wrong-password") {
        setMensaje("Contraseña Incorrecta")
        setTipo("error")
      }
      console.log(e.code)
      console.log(e.message)
    })

  }


  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (!email || !contraseña) {
      setMensaje("Rellene Los Campos Obligatorios")
      setTipo("error")
    }
    if (email && contraseña) iniciarSesion(email, contraseña);
    if (usuario) {
      setVisibleTop(false);
      setDisplayResponsive(false);
    }
  };


  return (
    <div className="form">
      <h1 className="text-blue-600"> Iniciar Sesión </h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" icon="pi pi-envelope" type="email" ref={emailRef} />
        <InputText placeholder={t("contraseña")} type="password" ref={contraseñaRef} />
        <Button type="submit">{t("iniciar-sesion")}</Button>
      </form>

    </div>
  );
};

export default IniciarSesion;