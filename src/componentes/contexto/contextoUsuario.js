import React, { createContext, useContext, useState } from "react";


const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)

export const ContextoUsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState('');
    const [disabledInputName, setDisabledInputName] = useState(false)
    const [visibleTop, setVisibleTop] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false)
    const [disabledLogInButton, setDisabledLogInButton] = useState(false)
    const [mensaje, setMensaje] = useState()
    const [tipo, setTipo] = useState()
    const [currentUser, setCurrentUser] = useState()
    const [abrirMenuUsuario, setAbrirMenuUsuario] = useState(false)
    const [abrirFooter, setAbrirFooter] = useState(false)



    const contextValue = {
        usuario,
        setUsuario,
        disabledInputName,
        setDisabledInputName,
        visibleTop,
        setVisibleTop,
        displayResponsive,
        setDisplayResponsive,
        disabledLogInButton,
        setDisabledLogInButton,
        mensaje,
        setMensaje,
        tipo,
        setTipo,
        currentUser,
        setCurrentUser,
        abrirMenuUsuario,
        setAbrirMenuUsuario,
        abrirFooter,
        setAbrirFooter
    }
    return (
        <ContextoUsuario.Provider value={contextValue}>{children}</ContextoUsuario.Provider>
    );

}