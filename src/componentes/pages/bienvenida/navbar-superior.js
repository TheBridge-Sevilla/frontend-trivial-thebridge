import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { useContextoUsuario } from "../../contexto/contextoUsuario";
import { useSignOut } from "../../customHooks/hook-cerrar-sesion";
import CambiarIdioma from "../../acciones/cambiar-idioma";
import { useItem } from "../../customHooks/hook-navbar-item"
import i18next from "i18next";


export const HeaderBar = (props) => {

    const { setVisibleTop, currentUser, usuario } = useContextoUsuario();
    const { cerrarSesion } = useSignOut()
    const { Item } = useItem()

    const [item, setItem] = useState([Item('iniciar-sesion', 'pi pi-user-plus', () => { setVisibleTop(true) })])

    useEffect(() => {
        if (currentUser) {
            setItem([
                Item(usuario, 'pi pi-user'),
                Item('cerrar-sesion', 'pi pi-sign-out', () => { cerrarSesion() })
            ])
        }
        else if (props.disabledLogIn) {
            setItem([Item('usuario-invitado', 'pi pi-user')])
        }
        return () => {
            setItem([Item('iniciar-sesion', 'pi pi-user-plus', () => { setVisibleTop(true) })])
        }
    }, [currentUser, props.disabledLogIn, i18next.language])

    return (
        <div className="card">
            <Menubar model={item} end={CambiarIdioma()} />
        </div>
    );
}