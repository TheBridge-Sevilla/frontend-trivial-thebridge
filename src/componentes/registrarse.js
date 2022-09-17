import {React, useState} from "react"
import {  signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { auth } from "./firebase";


const provider = new GoogleAuthProvider();

function Registro(){
    const [usuario, setUsuario] = useState()
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((resultado)=>{
          const nombre = resultado.user.displayName
          setUsuario(nombre)
          console.log(nombre)
        })
        .catch((error)=>{
          console.log(error)
        })
      
    }
    const signOutWithGoogle = ()=>{
        signOut(auth).then(()=>{
         setUsuario()
          })
          .catch((error)=>{
            console.log(error)
          })
     }

    return(
        <div className="Registro">
            {usuario ? <button onClick={signOutWithGoogle}>Cerrar Sesión</button> : <button onClick={signInWithGoogle}>Inicia Sesión</button>}
            <p>{usuario}</p>

        </div>
    )
}

export default Registro