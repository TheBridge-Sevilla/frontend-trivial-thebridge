import { useTranslation } from "react-i18next";
import { useContextoUsuario } from "../contexto/contextoUsuario";

export function useItem() {
    const { t } = useTranslation();
    const { setVisibleTop } = useContextoUsuario();

    const Item = (label = 'iniciar-sesion', icon = 'pi pi-user-plus', command = () => { setVisibleTop(true) }, disabled = false) => {

        return {
            label: t(label),
            icon: icon,
            command: command,
            disabled: disabled
        }
    }

    return { Item }
} 