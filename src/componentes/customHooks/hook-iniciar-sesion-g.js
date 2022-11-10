import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContextoUsuario } from '../contexto/contextoUsuario'
import { auth } from "../firebase/firebase";

export function useSignWithG() {
    const { setUsuario, setDisabledInputName, setVisibleTop, setCurrentUser } = useContextoUsuario();
    const provider = new GoogleAuthProvider();
    const iniciarSesionConG = () => {
        signInWithPopup(auth, provider).then((resultado) => {
            const nombre = resultado.user.displayName
            setUsuario(nombre)
            setDisabledInputName(true)
            setVisibleTop(false)
            setCurrentUser(resultado.user)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return { iniciarSesionConG }

}