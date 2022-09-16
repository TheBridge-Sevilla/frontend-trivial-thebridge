import {React, useState} from "react"
import {  signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase";
import { Button } from "primereact/button";



const provider = new GoogleAuthProvider();

function Registro(){
    const [usuario, setUsuario] = useState()
    onAuthStateChanged(auth, (usuarioFirebase)=>{
      if (usuarioFirebase){
        setUsuario(usuarioFirebase)
      }
      else{
        setUsuario()
      }
    })

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
      <div className="flex align-items-center justify-content-center ">
             {usuario ? <Button  label="Cerrar Sesión" onClick={signOutWithGoogle}/>: <Button icon="pi pi-google" label="Inicia Sesión" onClick={signInWithGoogle}/>} 
         </div>
     )
     }




export default Registro