import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import RegistroConGoogle from './registro-google';
import RegistroConEmail from './registro-email';


function UserSidebar() {
    //visibleTop necesario para Sidebar, elemento de PrimeReact
    const [visibleTop, setVisibleTop] = useState(false);

    return (
        <div className='card'>
            <Sidebar visible={visibleTop} className="p-sidebar-sm" position="top" onHide={() => setVisibleTop(false)}>
                <div className='flex justify-content-center'>
                    <RegistroConGoogle />
                    <RegistroConEmail />
                </div>
            </Sidebar>
            <Button icon="pi pi-user-plus" onClick={() => setVisibleTop(true)} className="mx-2" />
        </div>

    )
}

export default UserSidebar