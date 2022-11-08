import React, { useEffect, useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { useContextoUsuario } from '../../contexto/contextoUsuario';
import { useSignOut } from '../../customHooks/hook-cerrar-sesion';
import CambiarIdioma from '../../acciones/cambiar-idioma';
import { useTranslation } from "react-i18next";


export const HeaderBar = (props) => {
    const { t } = useTranslation();
    const { setVisibleTop, currentUser } = useContextoUsuario();
    const { cerrarSesion } = useSignOut()

    const itemsOptions = [
        {
            label: t("iniciar-sesion"),
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
        else if (props.disabledLogIn) {
            setItems([itemsOptions[3]])
        }
        return () => {
            setItems([itemsOptions[0]])
        }
    }, [currentUser, props.disabledLogIn])

    return (
        <div className="card">
            <Menubar model={items} end={CambiarIdioma()} />
        </div>
    );
}