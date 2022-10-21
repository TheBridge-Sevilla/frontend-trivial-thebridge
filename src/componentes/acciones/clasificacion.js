import React, { useEffect, useState } from "react";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useTranslation } from "react-i18next";

function Clasificacion(props) {
  const url = process.env.REACT_APP_API_URL + "/partidas/categoria";
  const [resultados, setResultados] = useState();
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log("clasificacion dentro del useeffect");
    console.log("entra en el useEffect");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: props.categoria._id }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setResultados(json));
  }, []);

  function listaPosicion(resultados, i) {
    return "# " + (i.rowIndex + 1);
  }

  return (
    <div className="w-full">
      <h4>{props.categoria.nombre[i18n.language]}</h4>
      <DataTable responsiveLayout="scroll" value={resultados}>
        <Column field="Index" header="Pos." body={listaPosicion}></Column>
        <Column field="nombre" header="Jugador"></Column>
        <Column field="puntuacion" header="Puntos"></Column>
      </DataTable>
    </div>
  );
}

export default Clasificacion;
