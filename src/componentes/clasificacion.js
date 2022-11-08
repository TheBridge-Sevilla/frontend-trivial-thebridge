import "./clasificacion.css";
import React, { useEffect, useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function Clasificacion() {
    const url = 'http://localhost:3050/partidas';

    const [partidas, setPartidas] = useState()

    useEffect(() => {
/*         fetch(url).then(data => setPartidas(data));
        console.log("partidas",partidas) */

        fetch(url).then(res => res.json()).then(json => setPartidas(json.map(partida => partida)))
        console.log("partidas",partidas)

    }, [])
console.log("partidas",partidas)
    return (
        <div className='w-full'>
        <DataTable responsiveLayout="scroll" value={partidas}>
            <Column field="posicion" header="Posicion"></Column>
            <Column field="nombre" header="Jugador"></Column> 
            <Column field="puntuacion" header="Puntuación"></Column>
            <Column field="fecha" header="Fecha"></Column>
        </DataTable></div>
    );

}

export default Clasificacion