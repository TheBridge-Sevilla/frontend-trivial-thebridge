import { React, useState, useEffect } from "react";
import Usuario from "./usuario"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useContextoUsuario } from "../contexto/contextoUsuario";
import { auth } from "./firebase"
import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";


const DialogDemo = () => {

  const [displayResponsive, setDisplayResponsive] = useState(false);
  const { usuario, setUsuario } = useContextoUsuario();

  const cerrarSesion = () => {
    signOut(auth)
    /*         setUsuario() */


  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (respuesta) => {
      respuesta ? setUsuario(respuesta.email) : setUsuario()


    })

    return unsubscribe
  }, [])



  return (

    <div>

      {usuario ? <Button label="cerrar-sesion" onClick={() => cerrarSesion()} /> : <Button label="Registrate" icon="pi pi-user" onClick={() => setDisplayResponsive(true)} />}

      <Dialog visible={displayResponsive} onHide={() => setDisplayResponsive(!displayResponsive)} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} >
        <Usuario />
      </Dialog>

    </div>
  )
}
export default DialogDemo