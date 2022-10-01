import { React, useEffect } from "react";
import Usuario from "./usuario"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth";


const RegistroConEmail = () => {
  //Display responsive es un estado necesario para el Dialog, elemento de PrimeReact
  const { usuario, setUsuario, setDisabledInputText, displayResponsive, setDisplayResponsive } = useContextoUsuario();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (respuesta) => {
      respuesta ? (setUsuario(respuesta.email), setDisabledInputText(true)) : setUsuario()
    })

    return unsubscribe
  }, [])

  return (

    <div>

      {usuario ? <></> : <Button className="mx-1" label="Registrate" icon="pi pi-user" onClick={() => setDisplayResponsive(true)} />}

      <Dialog visible={displayResponsive} onHide={() => setDisplayResponsive(!displayResponsive)} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
        <Usuario />
      </Dialog>

    </div>
  )
}
export default RegistroConEmail