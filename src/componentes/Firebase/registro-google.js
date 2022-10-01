import { React } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Button } from "primereact/button";
import { useContextoUsuario } from '../contexto/contextoUsuario'



const provider = new GoogleAuthProvider();

function RegistroConGoogle() {
  const { usuario, setUsuario, setDisabledInputText } = useContextoUsuario();


  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((resultado) => {
      const nombre = resultado.user.displayName
      setUsuario(nombre)
      setDisabledInputText(true)
    })
      .catch((error) => {
        console.log(error)
      })

  }
  const signOutWithGoogle = () => {
    signOut(auth).then(() => {
      setUsuario()
      setDisabledInputText(false)

    })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <div className="flex align-items-center justify-content-center ">
      {usuario ? <Button className="mx-1" label="Cerrar Sesión" onClick={signOutWithGoogle} /> : <Button className="mx-1" icon="pi pi-google" label="Inicia Sesión" onClick={signInWithGoogle} />}
      <p>{usuario}</p>
    </div>
  )
}




export default RegistroConGoogle