import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useTranslation } from "react-i18next";

function SelectCategoria(props) {
  const { t } = useTranslation()
  const { i18n } = useTranslation();
  const url = process.env.REACT_APP_API_URL + "/categorias";
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCategorias(json.map((categoria) => categoria));
      });
  }, [i18n.language]);
  const handleCategorias = (e) => {
    // El objeto entero de la categoría.
    let categoriaObj = categorias.filter((categoria) =>
      categoria.nombre[i18n.language] == e.target.value
    )[0];


    // categorias.map((categoria) => console.log(categoria))
    setCategoriaSeleccionada(e.value), props.setCategoria(categoriaObj);

  };

  return (
    <Dropdown
      className="w-13rem"
      value={categoriaSeleccionada}
      options={categorias.map((categoria) => categoria.nombre[i18n.language])}
      onChange={(e) => handleCategorias(e)}
      placeholder={t("categoria")}
    />
  );
}
  
export default SelectCategoria;
