import React, { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useTranslation } from "react-i18next";


function Clasificacion(props) {
  const url = process.env.REACT_APP_API_URL + '/partidas/categoria';
  const [resultados, setResultados] = useState()

  useEffect(() => {
    console.log("clasificacion dentro del useeffect");
    console.log("entra en el useEffect");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: props.categoria })
  };
  fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => setResultados(json))
}, []);


  function listaPosicion(resultados, i) {
    return "# " + (i.rowIndex + 1);
  }
//Para obtener el valor de la categoria según el idioma seleccionado creamos la variable categoria
const { i18n } = useTranslation();
let categoria = "categoria.nombre." + i18n.language

  return (

    <div className='w-full'>
      <DataTable responsiveLayout="scroll" value={resultados} scrollable scrollHeight="280px">
        <Column field="Index" header="Pos." body={listaPosicion}></Column>
        <Column field="nombre" header="Jugador"></Column>
        <Column field={categoria} header="Categoria"></Column>
        <Column field="puntuacion" header="Puntos"></Column>
        <Column field="fecha" header="Fecha"></Column>
      </DataTable></div>
  );

}

export default Clasificacion
