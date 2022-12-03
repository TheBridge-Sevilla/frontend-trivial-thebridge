import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import DatosJugador from './datos-jugador';
import { useMediaQuery } from "usehooks-ts";

function PerfilUsuario() {

    const matches = useMediaQuery("(min-width: 576px)");
    const { abrirMenuUsuario, setAbrirMenuUsuario } = useContextoUsuario();


    return (
        <div className='card'>
            <Sidebar
                visible={abrirMenuUsuario}
                className={matches ? "p-sidebar sm:w-6 md:w-5 lg:w-4 xl:w-3 flex flex-column justify-content-center" : "p-sidebar-sm w-screen flex flex-column justify-content-center"}
                position="left"
                onHide={() => setAbrirMenuUsuario(false)}>
                <DatosJugador />
            </Sidebar>
        </div>
    );
}

export default PerfilUsuario