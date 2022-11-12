import React from 'react';
import { Button } from 'primereact/button';
import { useContextoUsuario } from '../../contexto/contextoUsuario'
import { useTranslation } from "react-i18next";
import { useSignOut } from '../../customHooks/hook-cerrar-sesion';

export default function BotonIniciarSesion(props) {
    //visibleTop necesario para Sidebar, elemento de PrimeReact
    const { currentUser, setVisibleTop } = useContextoUsuario();
    const { t } = useTranslation();

    const { cerrarSesion } = useSignOut()
console.log(props.disabled)
    return (
        <div className='card '>
            {
                currentUser ?
                    <Button
                        icon="pi pi-sign-out"

                        onClick={cerrarSesion}
                        tooltip={t("cerrar-sesion")}
                        tooltipOptions={{ position: 'top' }}
                        className="mx-2"
                    />
                    :
                    <Button
                        icon="pi pi-user-plus"
                        onClick={() => setVisibleTop(true)}
                        disabled={props.disabledLogIn}
                        tooltip={t("iniciar-sesion")}
                        tooltipOptions={{ position: 'top' }}
                        className="mx-2"
                    />
            }
        </div>

    )
}
