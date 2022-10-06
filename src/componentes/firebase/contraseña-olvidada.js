import React , {useRef} from 'react'
import { auth } from "./firebase"
import { sendPasswordResetEmail } from "firebase/auth";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function ContraseñaOlvidada() {

  const emailRef = useRef();


  const contraseñaOlvidada = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      contraseñaOlvidada(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div>
      <div className="form">
        <h1 className="text-blue-600"> Cambiar Contraseña </h1>
        <form >
          <InputText placeholder="Email" icon="pi pi-envelope" type="email" ref={emailRef} />
          <Button onClick={forgotPasswordHandler} >Recuperar Contraseña</Button>
        </form>
      </div>
    </div>
  )
}
