import React from "react"
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import { useSignWithG } from "../customHooks/useSignWithG";

export default function RegistroConGoogle() {
  const { iniciarSesionConG } = useSignWithG()
  const { t } = useTranslation();
  const labelBotonLenguaje = ["iniciar-sesion", "registro-google"]


  return (
    <div className="flex align-items-center justify-content-center ">
      <Button className="mx-1" icon="pi pi-google" label={t(`${labelBotonLenguaje[1]}`)} onClick={() => iniciarSesionConG()} />
    </div>
  )
}