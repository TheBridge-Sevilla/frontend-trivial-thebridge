import React, { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Clasificacion(props) {
  const url = 'http://localhost:3050/partidas/categoria';
  const [resultados, setResultados] = useState()

  useEffect(() => {
    console.log("preguntas dentro del useeffect", resultados);
    console.log("entra en el useEffect");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria: props.categoria }),
    })
      .then((res) => res.json())
      .then(json => setResultados(json.map(resultado => resultado)))

  }, [])

  function listaPosicion(resultados, i) {
    return "# " + (i.rowIndex + 1);
  }
  return (

    <div className='w-full'>
      <DataTable responsiveLayout="scroll" value={resultados}>
        <Column field="Index" header="Pos." body={listaPosicion}></Column>
        <Column field="nombre" header="Jugador"></Column>
        <Column field="categoria.nombre" header="Categoria"></Column>
        <Column field="puntuacion" header="Puntos"></Column>
      </DataTable></div>
  );

}

export default Clasificacion