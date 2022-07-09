import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


/*
function getPregunta() {
    return fetch("")
        .then(response => response.json())
        .then(pregunta => {
            return pregunta;
        }
        )
}

*/


export default function App() {
    const [preguntas, setPreguntas] = useState("");


    useEffect (() => {
        fetch("localhost:3050/preguntas")
        .then(response => response.json())
        .then(data => {setPreguntas(data)}
)
    }   
    , []);

    

 return (
    <div>
        <h1>Pregunta</h1>
        <ul>
            {preguntas.map(pregunta => (
                <li key={pregunta.id}>
                    {pregunta.pregunta}
                </li>
            ))}
        </ul>
    </div>
)
}


