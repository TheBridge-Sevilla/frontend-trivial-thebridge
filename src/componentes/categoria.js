import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useTranslation } from "react-i18next";

function SelectCategoria(props) {
  const { i18n } = useTranslation();
  const url = "http://localhost:3050/categorias";
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) =>
        setCategorias(json.map((categoria) => categoria._id))
      );
  }, [i18n.language]);
  const handleCategorias = (e) => {
    setCategoriaSeleccionada(e.value), props.setCategoria(e.target.value);
  };

  return (
    <Dropdown
      className="w-13rem"
      value={categoriaSeleccionada}
      options={categorias}
      onChange={(e) => handleCategorias(e)}
      placeholder="Categorias"
    />
  );
}

export default SelectCategoria;
