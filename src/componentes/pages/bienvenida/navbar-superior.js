import React, { useEffect, useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { useContextoUsuario } from '../../contexto/contextoUsuario';
import { useSignOut } from '../../customHooks/useSignOut';


export const HeaderBar = () => {
    const { setVisibleTop, usuario } = useContextoUsuario();
    const { cerrarSesion } = useSignOut()
    const itemsOptions = [
        {
            label: 'Iniciar sesion',
            icon: 'pi pi-fw pi-user-plus',
            command: () => { setVisibleTop(true) }
        },
        {
            label: 'User',
            icon: 'pi pi-fw pi-user',

        },
        {
            label: 'Cerrar sesion',
            icon: 'pi pi-sign-out',
            command: () => { cerrarSesion() }
        }]

    const [items, setItems] = useState(
        [itemsOptions[0]]
    )

    useEffect(() => {
        if (usuario) {
            setItems([
                itemsOptions[1],
                itemsOptions[2]
            ])
        }

        return () => {
            setItems([itemsOptions[0]])
        }
    }, [usuario])

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
}