import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { useContextoUsuario } from "../../contexto/contextoUsuario";
import { useSignOut } from "../../customHooks/hook-cerrar-sesion";
import CambiarIdioma from "../../acciones/cambiar-idioma";
import { useItem } from "../../customHooks/hook-navbar-item"
import i18next from "i18next";
import { Image } from 'primereact/image';

export const HeaderBar = (props) => {

    const { currentUser, usuario,setVisibleLeft } = useContextoUsuario();
    const { cerrarSesion } = useSignOut()
    const { Item } = useItem()

    const [item, setItem] = useState([Item()])

    useEffect(() => {
        if (currentUser) {
            setItem([
                Item(usuario, 'pi pi-user', () => setVisibleLeft(true)),
                Item('cerrar-sesion', 'pi pi-sign-out', () => { cerrarSesion() })
            ])
        }
        else if (props.disabledLogIn) {
            setItem([Item('usuario-invitado', 'pi pi-user',undefined,true)])
        }
        return () => {
            setItem([Item()])
        }
    }, [currentUser, props.disabledLogIn, i18next.language])

    return (
        <div className="card ">
            <Menubar model={item} start={<Image width="50" height="50" src='media/logo-fragen.png'  id="rotar" className="" />} end={CambiarIdioma()} className="surface-300 border-noround border-none" />
        </div>
    );
}