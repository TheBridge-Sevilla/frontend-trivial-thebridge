import React, { useRef} from 'react'
import { useTranslation } from "react-i18next";
import { auth } from "./firebase"
import { sendPasswordResetEmail } from "firebase/auth";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { useContextoUsuario } from "../contexto/contextoUsuario";

export default function ContraseñaOlvidada() {
  const { t } = useTranslation();
  const emailRef = useRef();

  const { setMensaje,  setTipo } = useContextoUsuario();


  const contraseñaOlvidada = (email) => {
    sendPasswordResetEmail(auth, email).then(() => {
      setMensaje("Revisa Tu Correo")
      setTipo("success")
    })
      .catch((e) => {
        if (e.code == "auth/user-not-found") {
          setMensaje("Usuario No Registrado")
          setTipo("error")
        }
        if (e.code == "auth/invalid-email") {
          setMensaje("Email No Es Valido")
          setTipo("error")
        }

      })
  }




  const forgotPasswordHandler = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    if (!email) {
      setMensaje("Rellene Los Campos Obligatorios")
      setTipo("error")
    } else if (email) {
      contraseñaOlvidada(email)

    }
  }

  return (
    <div>
      <div className="form">
        <h1 className="text-blue-600">{t("cambiar-contraseña")}</h1>
        <form >
          <InputText placeholder="Email" icon="pi pi-envelope" type="email" ref={emailRef} />
          <Button onClick={forgotPasswordHandler} >{t("recuperar-contraseña")}</Button>

        </form>
      </div>
    </div>
  )
}
