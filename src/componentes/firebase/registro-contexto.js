import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useContextoUsuario } from "../contexto/contextoUsuario";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { auth } from "./firebase";

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
  } = useContextoUsuario();

  const registrarUsuario = (email, contraseña, nombre) => {
    createUserWithEmailAndPassword(auth, email, contraseña)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: nombre,
        });
      })
      .then(() => {
        setUsuario(auth.currentUser.displayName);
        setDisabledInputName(true);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const nombre = nombreRef.current.value;
    if (email && contraseña && nombre)
      registrarUsuario(email, contraseña, nombre);
    setVisibleTop(false);
    setDisplayResponsive(false);
  };

  return (
    <div className="form">
      <h1 className="text-blue-600">{t("crear-cuenta")}</h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" type="email" ref={emailRef} />
        <InputText placeholder={t("nombre")} type="name" ref={nombreRef} />
        <Password placeholder={t("contraseña")} type="password" onChange={(e) => setContraseña(e.target.value)} />
        <Button type="submit">{t("crear-cuenta")}</Button>
      </form>
    </div>
  );
};
export default Registrarse;
