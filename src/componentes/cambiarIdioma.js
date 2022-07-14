import { useTranslation } from "react-i18next";
import React from "react";


function CambiarIdioma() {
    const { i18n } = useTranslation();
    return (
        <div id="contenedor-banderas">
            <img
                onClick={() => i18n.changeLanguage("es")}
                alt="Spain"
                height={40}
                with={40}
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" />
            <br />
            <img
                onClick={() => i18n.changeLanguage("en")}
                alt="United States"
                height={40}
                with={40}
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg" />
        </div>
    )
}
export default CambiarIdioma