import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { useContextoUsuario } from "../../contexto/contextoUsuario";
import { useSignOut } from "../../customHooks/hook-cerrar-sesion";
import CambiarIdioma from "../../acciones/cambiar-idioma";
import { useTranslation } from "react-i18next";

export const HeaderBar = (props) => {
  const { t, i18n } = useTranslation();
  const { setVisibleTop, currentUser } = useContextoUsuario();
  const { cerrarSesion } = useSignOut();

  const [items, setItems] = useState([
    {
      label: t("iniciar-sesion"),
      icon: "pi pi-user-plus",
      command: () => {
        setVisibleTop(true);
      },
    },
  ]);

  useEffect(() => {
    if (currentUser) {
      setItems([
        {
          label: "User",
          icon: "pi pi-user",
        },
        {
          label: "Usuario",
          icon: "pi pi-sign-out",
          command: () => {
            cerrarSesion();
          },
        },
      ]);
    } else if (props.disabledLogIn) {
      setItems([
        {
          label: "Usuario invitado",
          icon: "pi pi-user",
          disabled: "true",
        },
      ]);
    }
    return () => {
      setItems([
        {
          label: t("iniciar-sesion"),
          icon: "pi pi-user-plus",
          command: () => {
            setVisibleTop(true);
          },
        },
      ]);
    };
  }, [currentUser, props.disabledLogIn, i18n.language]);

  return (
    <div className="card">
      <Menubar model={items} end={CambiarIdioma()} />
    </div>
  );
};
