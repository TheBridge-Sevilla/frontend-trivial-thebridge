import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';
import { auth } from "./firebase";
import EntrarConGoogle from "./iniciar-sesion-google";


const Registrarse = () => {
  const { t } = useTranslation();
  const emailRef = useRef();
  const nombreRef = useRef();
  const [contraseña, setContraseña] = useState();

  const {
    setUsuario,
    setDisabledInputName,
    setVisibleTop,
    setDisplayResponsive,
    setMensaje,
    setTipo,
    setCurrentUser
  } = useContextoUsuario();

  const registrarUsuario = (email, contraseña, nombre) => {
    createUserWithEmailAndPassword(auth, email, contraseña)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: nombre,
        }).then(() => {
          setUsuario(auth.currentUser.displayName);
          setDisabledInputName(true)
          setCurrentUser(auth.currentUser);
        });
      }).catch((e) => {
        if (e.code == "auth/email-already-in-use") {
          setMensaje(t("email-registrado"))
          setTipo("error")
        }
        if (e.code == "auth/weak-password") {
          setMensaje(t("contraseña-corta"))
          setTipo("error")
        }
      })
  };


  async function onSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const nombre = nombreRef.current.value;

    if (!email || !contraseña || !nombre) {
      setMensaje(t("campos-obligatorios"))
      setTipo("error")
    }
    if (email && contraseña && nombre) {
      registrarUsuario(email, contraseña, nombre)
      setVisibleTop(false)
      setDisplayResponsive(false)
    }
  }


  return (
    <div className="form">
      <h1 className="text-blue-600">{t("crear-cuenta")}</h1>
      <div>
        <form onSubmit={onSubmit}>
          <InputText placeholder="Email" type="email" ref={emailRef} />
          <InputText placeholder={t("nombre")} type="name" ref={nombreRef} />
          <Password
            placeholder={t("contraseña")}
            onChange={(e) => setContraseña(e.target.value)} toggleMask />
          <Button type="submit">{t("crear-cuenta")}</Button>
          <Divider align="center" type="dashed">
            <b>{t("o")}</b>
          </Divider>
        </form>
        <EntrarConGoogle alt="registro-google" />
      </div>
    </div>
  );
};
export default Registrarse;
