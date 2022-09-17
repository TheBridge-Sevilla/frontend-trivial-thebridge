import {React , useState} from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth , firestore } from "./firebase";
import {doc, setDoc} from "firebase/firestore"







function RegistroConEmail (){
    const [isRegistrado, setIsRegistrado] = useState(false)

    async function registrarUsuario(email, contraseña, jugador){
        const infoUsuario = await createUserWithEmailAndPassword(auth, email, contraseña, jugador)
        .then((usuarioFirebase)=>{
            return usuarioFirebase
        })
        console.log(infoUsuario.user.uid)
        const documento =  doc(firestore, `Jugadores/${infoUsuario.user.uid}`)
        setDoc(documento, {email : email , jugador: jugador});
 
    }

    function handleSummit(){
        const email = document.getElementById("email").value
        const contraseña = document.getElementById("contraseña").value
        const jugador = document.getElementById("jugador").value
        console.log(email, contraseña, jugador)
        if(isRegistrado){
            registrarUsuario(email,contraseña,jugador)
        }


    }

    return(
        
<div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">{isRegistrado ? "Registrate" : "Inicia Sesión"}</div>
        </div>

        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" className="w-full mb-3" />

            <label htmlFor="contraseña" className="block text-900 font-medium mb-2">Constraseña</label>
            <InputText id="contraseña" type="password" className="w-full mb-3" />

            {isRegistrado ? <div><label htmlFor="jugador" className="block text-900 font-medium mb-2">Nombre del Jugador</label>
            <InputText id="jugador" type="text" className="w-full mb-3" /></div> : ""}

            
                {/* <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a> */}
            <a onClick={()=> setIsRegistrado(!isRegistrado) } className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">{isRegistrado ? "¿Ya Tienes Una Cuenta?" : "Crear Una Cuenta"}</a>
        </div>

            <Button onClick={handleSummit} label={isRegistrado ? "Registrarse" : "Iniciar Sesión"} icon="pi pi-user" className="w-full" />
        </div>
    </div>

    );
}
export default RegistroConEmail