import { React } from "react"
import { useTranslation } from "react-i18next";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { Button } from "primereact/button";
import { useContextoUsuario } from '../contexto/contextoUsuario'

const provider = new GoogleAuthProvider();

function RegistroConGoogle() {
  const { t } = useTranslation();
  const { usuario, setUsuario, setDisabledInputName, setVisibleTop } = useContextoUsuario();


  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((resultado) => {
      const nombre = resultado.user.displayName
      setUsuario(nombre)
      setDisabledInputName(true)
      setVisibleTop(false)
    })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <div className="flex align-items-center justify-content-center ">
      {usuario ? <></> : <Button className="mx-1" icon="pi pi-google" label={t("iniciar-sesion")} onClick={signInWithGoogle} />}
    </div>
  )
}

export default RegistroConGoogle