import { signInWithPopup, GoogleAuthProvider as provider } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import { useContextoUsuario } from '../contexto/contextoUsuario'

const { setUsuario, setDisabledInputName, setVisibleTop } = useContextoUsuario();

export const useSignInWithGoogle = () => {

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