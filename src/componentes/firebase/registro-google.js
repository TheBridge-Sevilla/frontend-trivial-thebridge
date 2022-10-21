import { React } from "react"
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import { useContextoUsuario } from '../contexto/contextoUsuario'
import { useSignInWithGoogle } from "../customHooks/UseSignInGoogle";

export default function RegistroConGoogle() {
  const { t } = useTranslation();
  const { usuario } = useContextoUsuario();
  const iniciarSesion = useSignInWithGoogle()

  return (
    <div className="flex align-items-center justify-content-center ">
      {usuario ? <></> : <Button className="mx-1" icon="pi pi-google" label={t("iniciar-sesion")} onClick={iniciarSesion} />}
    </div>
  )
}

