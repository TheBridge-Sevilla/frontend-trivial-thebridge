import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import RegistroConGoogle from './registro-google';
import RegistroConEmail from './registro-email';
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useContextoUsuario } from '../contexto/contextoUsuario'



function UserSidebar() {
    //visibleTop necesario para Sidebar, elemento de PrimeReact
    const { usuario, setUsuario, setDisabledInputText, visibleTop, setVisibleTop } = useContextoUsuario();
    const handleClick = () => {
        signOut(auth).then(() => {
            setUsuario()
            setDisabledInputText(false)
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
            {usuario ? <Button icon="pi pi-sign-out" onClick={handleClick} tooltip="Cerrar sesión" tooltipOptions={{ position: 'top' }} className="mx-2" /> : <Button icon="pi pi-user-plus" onClick={() => setVisibleTop(true)} tooltip="Inciar sesión" tooltipOptions={{ position: 'top' }} className="mx-2" />}
        </div>

    )
}

export default UserSidebar