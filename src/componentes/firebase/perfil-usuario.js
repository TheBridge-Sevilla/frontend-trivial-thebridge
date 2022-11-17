import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import DatosJugador from './datos-jugador';
import { useMediaQuery } from "usehooks-ts";

function PerfilUsuario() {

    const matches = useMediaQuery("(min-width: 576px)");
    const { visibleLeft, setVisibleLeft } = useContextoUsuario();

    if (matches) {
        return (
            <div className='card'>
                <Sidebar
                    visible={visibleLeft}
                    className="p-sidebar sm:w-6 md:w-5 lg:w-4 xl:w-3 flex flex-column justify-content-center"
                    position="left"
                    onHide={() => setVisibleLeft(false)}>
                    <DatosJugador />
                </Sidebar>

            </div>
        );
    } else {
        return (
            <div className='card'>
                <Sidebar visible={visibleLeft}
                    className="p-sidebar-sm w-screen flex flex-column justify-content-center"
                    position="left"
                    onHide={() => setVisibleLeft(false)}>
                    <DatosJugador />
                </Sidebar>
            </div>
        );

    }
}
export default PerfilUsuario