import React from 'react'
import Usuario from './usuario';
import { Dialog } from 'primereact/dialog';
import { useContextoUsuario } from '../contexto/contextoUsuario'


export function SignDialog() {
    const { visibleTop, setVisibleTop } = useContextoUsuario();

    return (
        <Dialog
            visible={visibleTop}
            className="p-sidebar-sm md:w-9 lg:w-5"
            onHide={() => setVisibleTop(false)}>
            <Usuario />
        </Dialog>
    )
}