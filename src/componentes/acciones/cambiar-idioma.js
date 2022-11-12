import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectButton } from 'primereact/selectbutton';

function CambiarIdioma() {
  const { i18n } = useTranslation();
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState(i18n.language)
  const idiomas = [
    {
      value: "es",
      label: "Spain",
      src: 'Media/ES.svg'
    },
    {
      value: "en",
      label: "United States",
      src: "Media/GB.svg",
    }
  ]

  const idiomasDisponibles = (idioma) => {
    return <img
      className="cursor-pointer"
      id={idioma.value}
      alt={idioma.alt}
      height="23"
      src={idioma.src}
    />
  }
  const handleClick = (e) => {
    i18n.changeLanguage(e.target.value)
    setIdiomaSeleccionado(e.value)
  }

  return (
    <SelectButton
      className="p-button-sm p-button-outlined"
      value={idiomaSeleccionado}
      options={idiomas}
      optionLabel={idiomas.label}
      itemTemplate={idiomasDisponibles}
      onChange={handleClick}
      unselectable={false}
    />
  );
}
export default CambiarIdioma;