import React from "react"
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import { useSignWithG } from "../customHooks/useSignWithG";

export default function EntrarConGoogle(props) {
  const { iniciarSesionConG } = useSignWithG()
  const { t } = useTranslation();


  return (
    <div className="flex align-items-center justify-content-center ">
      <Button
        className="mx-1"
        icon="pi pi-google"
        label={t(`${props.alt}`)}
        onClick={() => iniciarSesionConG()} />
    </div>
  )
}