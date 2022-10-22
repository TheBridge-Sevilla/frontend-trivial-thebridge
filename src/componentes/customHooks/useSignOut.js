import { auth } from "./../firebase/firebase";
import { useContextoUsuario } from '../contexto/contextoUsuario'
import { signOut } from "firebase/auth";


export function useSignOut() {
    const { setUsuario, setDisabledInputName } = useContextoUsuario();

    const cerrarSesion = () => {
        signOut(auth).then(() => {
            setUsuario()
            setDisabledInputName(false)
        }
        )
            .catch((error) => {
                console.log(error)
            })
    }

    return { cerrarSesion }
}