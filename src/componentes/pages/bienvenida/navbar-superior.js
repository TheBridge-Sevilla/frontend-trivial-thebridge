import React, { useEffect, useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { useContextoUsuario } from '../../contexto/contextoUsuario';
import { useSignOut } from '../../customHooks/hook-cerrar-sesion';
import CambiarIdioma from '../../acciones/cambiar-idioma';


export const HeaderBar = (props) => {
    const { setVisibleTop, currentUser } = useContextoUsuario();
    const { cerrarSesion } = useSignOut()

    const itemsOptions = [
        {
            label: 'Iniciar sesion',
            icon: 'pi pi-user-plus',
            command: () => { setVisibleTop(true) },
        },
        {
            label: 'User',
            icon: 'pi pi-user',
        },
        {
            label: 'Usuario',
            icon: 'pi pi-sign-out',
            command: () => { cerrarSesion() }
        },
        {
            label: 'Usuario invitado',
            icon: 'pi pi-user',
            disabled: 'true'
        }]

    const [items, setItems] = useState(
        [itemsOptions[0]]
    )

    useEffect(() => {
        if (currentUser) {
            setItems([
                itemsOptions[1],
                itemsOptions[2]
            ])
        }
        else if (props.disabledLogOut) {
            setItems([itemsOptions[3]])
        }
        return () => {
            setItems([itemsOptions[0]])
        }
    }, [currentUser, props.disabledLogOut])

    return (
        <div className="card">
            <Menubar model={items} end={CambiarIdioma()} />
        </div>
    );
}