import React, { useState } from 'react';
// import './App.css'
export default function Quiz() {
    const preguntas = [
        {
            enunciado: 'De que color es el caballo blanco de Santiago',
            respuestas: [
                { opciones: 'Santiago no tenía caballo', resultado: false },
                { opciones: 'Marrón', resultado: false },
                { opciones: 'Blanco', resultado: true },
                { opciones: 'Negro', resultado: false },
            ],
        },
        {
            enunciado: 'Si vamos en una carrera y adelantamos al segundo. ¿En qué puesto vamos?',
            respuestas: [
                { opciones: 'Primero', resultado: false },
                { opciones: 'Segundo', resultado: true },
                { opciones: 'Depende de la velocidad y la distancia a la meta', resultado: false },
                { opciones: 'Faltan datos para poder averiguarlo, pero aproximadamente es el log2', resultado: false },
            ],
        },
        {
            enunciado: ' ¿Quién tiene el record del mundo en velocidad?',
            respuestas: [
                { opciones: 'Usain Bolt', resultado: true },
                { opciones: 'Sonic', resultado: false },
                { opciones: 'Speddy González', resultado: false },
                { opciones: 'Flash', resultado: false },
            ],
        },

    ];

    const [opcionesPreguntas, setOpcionesPreguntas] = useState(0);
    const [verMarcador, setVerMarcador] = useState(false);
    const [marcador, setMarcador] = useState(0);

    const respuestaSeleccionada = (resultado) => {
        if (resultado) {
            setMarcador(marcador + 1);
        }

        const siquientePregunta = opcionesPreguntas + 1;
        if (siquientePregunta < preguntas.length) {
            setOpcionesPreguntas(siquientePregunta);
        } else {
            setVerMarcador(true);
        }
    };
    return (


        <div className='app'>

            {verMarcador ? (
                <div className='marcador-box'>
                    Tienes {marcador} aciertos de {preguntas.length}
                </div>
            ) : (
                <>
                    <div className='preguntas-box'>
                        <div className='numero-preguntas'>
                            <span>Pregunta {opcionesPreguntas + 1}</span>/{preguntas.length}
                        </div>
                        <div className='enunciado-pregunta'>{preguntas[opcionesPreguntas].enunciado}</div>
                    </div>
                    <div className='respuesta-box'>
                        {preguntas[opcionesPreguntas].respuestas.map((respuestas) => (
                            <button onClick={() => respuestaSeleccionada(respuestas.resultado)}>{respuestas.opciones}</button>
                        ))}
                    </div>
                </>
            )}
        </div>

    );
}