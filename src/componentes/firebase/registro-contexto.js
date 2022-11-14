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
import './registro-contexto.css'


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
    setTipo
  } = useContextoUsuario();

  const registrarUsuario = (email, contraseña, nombre) => {
    createUserWithEmailAndPassword(auth, email, contraseña)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: nombre,
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

      .then(() => {
        setUsuario(auth.currentUser.displayName);
        setDisabledInputName(true);
      });
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
    <div className="form flex flex-column">
      <form className="flex flex-column justify-content-center align-items-center" onSubmit={onSubmit}>
        <h1 className="text-blue-600">{t("crear-cuenta")}</h1>
        <InputText
          className="my-1 w-11 md:w-9 lg:w-6 lg:my-2"
          placeholder="Email"
          type="email"
          ref={emailRef}
        />
        <InputText
          className="my-1 w-11 md:w-9 lg:w-6 lg:my-2"
          placeholder={t("nombre")}
          type="name"
          ref={nombreRef}
        />
        <Password
          className="my-1 w-11 md:w-9 lg:w-6 lg:my-2"
          placeholder={t("contraseña")}
          onChange={(e) => setContraseña(e.target.value)}
          toggleMask
        />
        <Button
          className="my-2 font-bold"
          type="submit">
          {t("crear-cuenta")}
        </Button>
        <Divider align="center" type="dashed">
          <b>{t("o")}</b>
        </Divider>
      </form>
      <EntrarConGoogle alt="registro-google" />
    </div>
  );
};
export default Registrarse;
