import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useContextoUsuario } from '../../contexto/contextoUsuario';
import { useSignOut } from '../../customHooks/useSignOut';


export const HeaderBar = () => {
    const { setVisibleTop } = useContextoUsuario();
    const { cerrarSesion } = useSignOut()

    const items = [
        {
            label: 'User',
            icon: 'pi pi-fw pi-user',

        },
        {
            label: 'Iniciar sesion',
            icon: 'pi pi-fw pi-user-plus',
            command: () => { setVisibleTop(true) }

        },
        {
            label: 'Cerrar sesion',
            icon: 'pi pi-sign-out',
            command: () => { cerrarSesion() }

        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
}