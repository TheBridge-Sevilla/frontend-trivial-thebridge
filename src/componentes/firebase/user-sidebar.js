import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import RegistroConGoogle from './registro-google';
import RegistroConEmail from './registro-email';
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useContextoUsuario } from '../contexto/contextoUsuario'
import { useTranslation } from "react-i18next";


function UserSidebar(props) {
    //visibleTop necesario para Sidebar, elemento de PrimeReact
    const { usuario,
        setUsuario,
        setDisabledInputName,
        visibleTop,
        setVisibleTop } = useContextoUsuario();
    const { t } = useTranslation();


    const handleClick = () => {
        signOut(auth).then(() => {
            setUsuario()
            setDisabledInputName(false)
        }
        )
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='card'>
            <Sidebar visible={visibleTop} className="p-sidebar-sm" position="top" onHide={() => setVisibleTop(false)}>
                <div className='flex justify-content-center'>
                    <RegistroConGoogle />
                    <RegistroConEmail />
                </div>
            </Sidebar>
            {usuario ? <Button icon="pi pi-sign-out" disabled={props.disabledLogOut} onClick={handleClick} tooltip={t("cerrar-sesion")}tooltipOptions={{ position: 'top' }} className="mx-2" /> : <Button icon="pi pi-user-plus" onClick={() => setVisibleTop(true)} tooltip={t("iniciar-sesion")} tooltipOptions={{ position: 'top' }} className="mx-2" />}
        </div>

    )
}

export default UserSidebar