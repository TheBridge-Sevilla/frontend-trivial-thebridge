import React from 'react'
import { Menubar } from 'primereact/menubar';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import { useContextoUsuario } from '../contexto/contextoUsuario'

const provider = new GoogleAuthProvider();

export const HeaderBar = () => {
    const { setUsuario, setDisabledInputName, setVisibleTop } = useContextoUsuario();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((resultado) => {
            const nombre = resultado.user.displayName
            setUsuario(nombre)
            setDisabledInputName(true)
            setVisibleTop(false)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    const items = [
        {
            label: 'User',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Iniciar sesion',
                    icon: 'pi pi-fw pi-user-plus',
                    command: () => { signInWithGoogle() },

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
}