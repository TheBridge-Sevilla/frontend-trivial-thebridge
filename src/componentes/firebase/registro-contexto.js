import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toast } from 'primereact/toast';
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
  const toast = useRef();
  const {
    setUsuario,
    setDisabledInputName,
    setVisibleTop,
    setDisplayResponsive,
    mensaje,
    setMensaje
  } = useContextoUsuario();

  const mostrarError = (mensaje) => {
    toast.current.show({ severity: 'error', summary: 'Error',detail:`${mensaje}` , life: 3000 });
  }

  useEffect(() => {
    mostrarError(mensaje)
  }, [mensaje])
  


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


  async function onSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const nombre = nombreRef.current.value;
    if (!email || !contraseña || !nombre) {
      setMensaje("Error al registrarse")
      console.log(mensaje)
    }

    if (email && contraseña && nombre) {
      registrarUsuario(email, contraseña, nombre);
      setVisibleTop(false);
      setDisplayResponsive(false)
    }
  }


  return (
    <div className="form">
      <h1 className="text-blue-600">{t("crear-cuenta")}</h1>
      <form onSubmit={onSubmit}>
        <InputText placeholder="Email" type="email" ref={emailRef} />

        <InputText placeholder={t("nombre")} type="name" ref={nombreRef} />
        <Password placeholder={t("contraseña")} type="password" onChange={(e) => setContraseña(e.target.value)} />
        <Button type="submit">{t("crear-cuenta")}</Button>
      </form>
      <Toast ref={toast} />
    </div>
  );
};
export default Registrarse;
