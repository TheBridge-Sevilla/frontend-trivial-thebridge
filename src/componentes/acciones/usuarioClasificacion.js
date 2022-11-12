import React, { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {auth} from "../firebase/firebase";
import { useTranslation } from "react-i18next";

function UsuarioClasificacion() {
  const url = process.env.REACT_APP_API_URL + '/partidas/usuario';
  const [resultados, setResultados] = useState()

  useEffect(() => {
    console.log("clasificacion dentro del useeffect");
    console.log("entra en el useEffect");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: auth.currentUser.uid })
  };
  fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => setResultados(json))
}, []);

  const { i18n } = useTranslation();
  let categoria = "categoria.nombre." + i18n.language
  return (

    <div className='w-full'>
      <DataTable responsiveLayout="w-screen" value={resultados}>
        <Column field="nombre" header="Jugador"></Column>
        <Column field={categoria} header="Categoria"></Column>
        <Column field="puntuacion" header="Puntos"></Column>
      </DataTable></div>
  );

}

export default UsuarioClasificacion