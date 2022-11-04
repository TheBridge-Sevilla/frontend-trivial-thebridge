import React from 'react';
import { Button } from 'primereact/button';
import { useContextoUsuario } from '../../contexto/contextoUsuario'
import { useTranslation } from "react-i18next";
import { useSignOut } from '../../customHooks/hook-cerrar-sesion';

function UserSidebar(props) {
    //visibleTop necesario para Sidebar, elemento de PrimeReact
    const { currentUser,
        setVisibleTop } = useContextoUsuario();
    const { t } = useTranslation();

    const { cerrarSesion } = useSignOut()

    return (
        <div className='card'>
            {
                currentUser ?
                    <Button
                        icon="pi pi-sign-out"

                        onClick={cerrarSesion}
                        tooltip="Cerrar sesión"
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

export default UserSidebar