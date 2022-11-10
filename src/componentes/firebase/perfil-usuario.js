import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import DatosJugador from './datos-jugador';




function PerfilUsuario() {

    const {  visibleLeft, setVisibleLeft } = useContextoUsuario();

    return (
        <div className='card'>
            <Sidebar visible={visibleLeft} className="p-sidebar-sm" position="left" onHide={() => setVisibleLeft(false)}>
                <div className='flex flex-column justify-content-center '>
                    <DatosJugador />

                </div>
            </Sidebar>
            
        </div>
    );
}
export default PerfilUsuario