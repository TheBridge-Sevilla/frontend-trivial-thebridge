import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import EntrarConGoogle from "./iniciar-sesion-google";
import { Divider } from "primereact/divider";


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
    setTipo,
    setCurrentUser
  } = useContextoUsuario();

  const iniciarSesion = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then((resultado) => {
      setUsuario(auth.currentUser.displayName)
      setDisabledInputName(true)
      setCurrentUser(resultado.user)
      setVisibleTop(false)
      setMensaje(t("bienvenido", {nombre: auth.currentUser.displayName}))
      setTipo("success")
    }).catch((e) => {
      if (e.code == "auth/user-not-found") {
        setMensaje(t("email-no-registrado"))
        setTipo("error")
      }
      if (e.code == "auth/wrong-password") {
        setMensaje(t("contraseña-erronea"))
        setTipo("error")
      }

    })

  }


  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (!email || !contraseña) {
      setMensaje(t("campos-obligatorios"))
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
      <h1 className="text-blue-600"> {t('iniciar-sesion')} </h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" icon="pi pi-envelope" type="email" ref={emailRef} />
        <InputText placeholder={t("contraseña")} type="password" ref={contraseñaRef} />
        <Button type="submit">{t("iniciar-sesion")}</Button>
        <Divider align="center" type="dashed">
          <b>{t("o")}</b>
        </Divider>
      </form>
      <EntrarConGoogle alt="iniciar-sesion" />
    </div>
  );
};

export default IniciarSesion;