import React from 'react';
import { Button } from 'primereact/button';
import { useContextoUsuario } from '../../contexto/contextoUsuario'
import { useTranslation } from "react-i18next";
import { useSignOut } from '../../customHooks/useSignOut';

function UserSidebar(props) {
    //visibleTop necesario para Sidebar, elemento de PrimeReact
    const { usuario,
        setVisibleTop } = useContextoUsuario();
    const { t } = useTranslation();

    const { cerrarSesion } = useSignOut()

    return (
        <div className='card'>
            {usuario ? <Button icon="pi pi-sign-out" disabled={props.disabledLogOut} onClick={cerrarSesion} tooltip="Cerrar sesión" tooltipOptions={{ position: 'top' }} className="mx-2" /> : <Button icon="pi pi-user-plus" onClick={() => setVisibleTop(true)} tooltip={t("iniciar-sesion")} tooltipOptions={{ position: 'top' }} className="mx-2" />}
        </div>

    )
}

export default UserSidebar