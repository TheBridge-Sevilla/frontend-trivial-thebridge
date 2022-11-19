import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import DatosJugador from './datos-jugador';
import { useMediaQuery } from "usehooks-ts";

function PerfilUsuario() {

    const matches = useMediaQuery("(min-width: 576px)");
    const {  visibleLeft, setVisibleLeft } = useContextoUsuario();

    if (matches) {
    return (
        <div className='card'>
            <Sidebar visible={visibleLeft} className="p-sidebar surface-300 " position="left" onHide={() => setVisibleLeft(false)}>
                <div className='flex flex-column justify-content-center '>
                    <DatosJugador />

                </div>
            </Sidebar>
            
        </div>
    );
} else {
    return (
        <div className='card '>
            <Sidebar visible={visibleLeft} className="p-sidebar-sm w-screen surface-300" position="left" onHide={() => setVisibleLeft(false)}>
                <div className='flex flex-column justify-content-center '>
                    <DatosJugador />

                </div>
            </Sidebar>
            
        </div>
    );

}
}
export default PerfilUsuario