import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContextoUsuario } from '../contexto/contextoUsuario'
import { auth } from "../firebase/firebase";
import { useTranslation } from "react-i18next";


export function useSignWithG() {
  const { t } = useTranslation();
    const { setUsuario, setDisabledInputName, setVisibleTop, setCurrentUser, setMensaje, setTipo     } = useContextoUsuario();
    const provider = new GoogleAuthProvider();
    const iniciarSesionConG = () => {
        signInWithPopup(auth, provider).then((resultado) => {
            const nombre = resultado.user.displayName
            setUsuario(nombre)
            setDisabledInputName(true)
            setVisibleTop(false)
            setCurrentUser(resultado.user)
            setMensaje(t("bienvenido", {nombre: auth.currentUser.displayName}))
            setTipo("success")
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return { iniciarSesionConG }

}