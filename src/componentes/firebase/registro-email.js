import { React, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Usuario from "./usuario"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth";
import { Messages } from 'primereact/messages';


const RegistroConEmail = () => {
  //Display responsive es un estado necesario para el Dialog, elemento de PrimeReact
  const { usuario, setUsuario, setDisabledInputName, displayResponsive, setDisplayResponsive, mensaje, setMensaje, tipo, setTipo } = useContextoUsuario();
  const messages = useRef();
  const { t } = useTranslation();

  const mostrarError = (tipo, mensaje) => {
    messages.current.show({ severity: `${tipo}`, detail: `${mensaje}`, life: 3000 });
  }
  useEffect(() => {
    if (mensaje && tipo !== "success") mostrarError(tipo, mensaje)

    return (() => {
      setMensaje()
      setTipo()
    })

  }, [mensaje])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (respuesta) => {
      respuesta ? (setUsuario(respuesta.email), setDisabledInputName(true)) : setUsuario()
    })

    return unsubscribe
  }, [])

  return (

    <div>

      {usuario ? <></> : <Button className="mx-1" label={t("crear-cuenta")} icon="pi pi-user" onClick={() => setDisplayResponsive(true)} />}

      <Dialog visible={displayResponsive} onHide={() => setDisplayResponsive(!displayResponsive)} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
        <Messages ref={messages} />
        <Usuario />
      </Dialog>

    </div>
  )
}
export default RegistroConEmail