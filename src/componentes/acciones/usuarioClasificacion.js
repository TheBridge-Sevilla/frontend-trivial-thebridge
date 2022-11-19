import React, { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { auth } from "../firebase/firebase";
import { useTranslation } from "react-i18next";

function UsuarioClasificacion() {
  const url = process.env.REACT_APP_API_URL + '/partidas/usuario';
  const [resultados, setResultados] = useState()
  const { i18n } = useTranslation()
  const { t } = useTranslation();
  let categoria = "categoria.nombre." + i18n.language

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: auth.currentUser.uid })
    };
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => {
        setResultados(json.map(partida =>{
          let partidaModificada = partida;
          partidaModificada['fecha'] = new Date(partida['fecha']).toLocaleDateString()
          partidaModificada['puntuacion'] = Math.round(partida['puntuacion'])
          return partidaModificada
        }))
      })
  }, []);
  return (
    <div className='w-full'>
      <DataTable responsiveLayout="w-screen" value={resultados} scrollable scrollHeight="280px">
        <Column field="fecha" header={t("fecha")}></Column>
        <Column field={categoria} header={t("categoria")}></Column>
        <Column field="puntuacion" header={t("puntos")}></Column>
      </DataTable></div>
  );

}

export default UsuarioClasificacion