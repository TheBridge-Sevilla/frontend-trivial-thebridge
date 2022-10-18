import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useContextoUsuario } from '../contexto/contextoUsuario';
import DatosJugador from './datos-jugador';



function PerfilUsuario() {

    const { usuario} = useContextoUsuario();
    const [visibleLeft, setVisibleLeft] = useState(false)

    const abrirPerfil =()=>{
        setVisibleLeft(!visibleLeft)
    }


    return (
        <div className='card'>
            <Sidebar visible={visibleLeft} className="p-sidebar-sm" position="left" onHide={() => setVisibleLeft(false)}>
                <div className='flex flex-column justify-content-center '>
                   <DatosJugador/>

                </div>
            </Sidebar>
            {usuario ? <Button icon="pi pi-user" onClick={() => abrirPerfil()} tooltipOptions={{ position: 'left' }} className="mx-2" /> : ""}
        </div>
    );
}


export default PerfilUsuario