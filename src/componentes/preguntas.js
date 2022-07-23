import React, { useState, useEffect } from 'react';
import Pregunta from './pregunta'

function Preguntas(props) {

    const url = 'http://localhost:3050/preguntas/categoria';
    //const [preguntas, setPreguntas] = useState([]);

    useEffect(() => {
        const formCategoria = new FormData();
        formCategoria.append('categoria', props.categoria);
        console.log(props)
        fetch(url , { method: 'POST', body: formCategoria}).then(res => res.json()).then(json =>  console.log(json))
    });
    return (
        <p>
            {
                //preguntas.map(pregunta => <Pregunta key={pregunta} >{pregunta}</Pregunta>)
            }
        </p >)
}

export default Preguntas