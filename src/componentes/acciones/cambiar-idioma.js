import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectButton } from 'primereact/selectbutton';
import './cambiar-idioma.css'

function CambiarIdioma() {
  const { i18n } = useTranslation();
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState(i18n.language)
  const idiomas = [
    {
      name: "español",
      value: "es",
      label: "Spain",
      src: 'Media/ES.svg'
    },
    {
      name: "ingles",
      value: "en",
      label: "United States",
      src: "Media/GB.svg"
    }
  ]

  const idiomasTemplates = (idioma) => {
    return <img
      className="cursor-pointer"
      id={idioma.value}
      alt={idioma.alt}
      height="23"
      src={idioma.src}
    />
  }

  const handleClick = (e) => {
    i18n.changeLanguage(e.value)
    setIdiomaSeleccionado(e.value)
  }

  return (
    <SelectButton
      value={idiomaSeleccionado}
      options={idiomas}
      optionLabel={idiomas.label}
      itemTemplate={idiomasTemplates}
      onChange={handleClick}
      unselectable={false}
    />
  );
}
export default CambiarIdioma;