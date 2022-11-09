import { useTranslation } from "react-i18next";

export function useItem() {
    const { t } = useTranslation();
    const Item = (label, icon, command) => {

        return {
            label: t(label),
            icon: icon,
            command: command
        }
    }

    return { Item }
} 