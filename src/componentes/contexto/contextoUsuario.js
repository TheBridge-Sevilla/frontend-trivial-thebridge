import React, { createContext, useContext, useState } from "react";

const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)

export const ContextoUsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState('');
    const [disabledInputText, setDisabledInputText] = useState(false)


    const contextValue = {
        usuario,
        setUsuario,
        disabledInputText,
        setDisabledInputText
    }

    return (
        <ContextoUsuario.Provider value={contextValue}>{children}</ContextoUsuario.Provider>
    );

}