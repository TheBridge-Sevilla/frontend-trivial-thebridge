import React ,{ createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)
 
export const ContextoUsuarioProvider =({children})=>{
    const [usuario, setUsuario] = useState();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (respuesta)=>{
            respuesta ? setUsuario(respuesta) : setUsuario();
        })
        return unsubscribe
    },[])

    const registrarUsuario = (email , contraseña , nombre)=>{
        createUserWithEmailAndPassword(auth , email , contraseña).then(()=>{
            return updateProfile(auth.currentUser,{
                displayName: nombre
            });
        })
        .then((respuesta)=>{
            console.log(respuesta)
        })

    }
    const iniciarSesion = (email , contraseña ,)=>{
        signInWithEmailAndPassword(auth, email, contraseña)
        
    }
    const cerrarSesion = ()=>{
        signOut(auth)
    }
    const contraseñaOlvidada = (email )=>{
        return sendPasswordResetEmail(auth, email)
    }


    const contextValue = {
        usuario,
        registrarUsuario,
        iniciarSesion,
        cerrarSesion,
        contraseñaOlvidada
    }

    return (
        <ContextoUsuario.Provider value={contextValue}>{children}</ContextoUsuario.Provider>
      );
    
}