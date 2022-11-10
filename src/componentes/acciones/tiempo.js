import React, { useState, useRef, useEffect } from 'react'

export default function Reloj(props) {

    const Ref = useRef(null);
    const [tiempo, setTiempo] = useState('00:00');

    const definirTiempo = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const segundos = Math.floor((total / 1000) % 60);
        const minutos = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutos, segundos
        };
    }

    const obtenerTiempo = (e) => {

        let { total, minutos, segundos } = definirTiempo(e);

        if (total >= 0) {
            setTiempo(
                (minutos > 9 ? minutos : '0' + minutos) + ':'
                + (segundos > 9 ? segundos : '0' + segundos)
            )
        }
    }

    const inicioTiempo = (e) => {

        //Ajustar tiempo partida
        setTiempo('00:20');

        //  actualización de la variable del temporizador será
        // después de 1000ms o 1seg

        if (Ref.current) clearInterval(Ref.current);
        const intervalo = setInterval(() => {
            obtenerTiempo(e);
        }, 1000)
        Ref.current = intervalo;
    }

    const nuevoTiempoRespuesta = () => {
        let tiempoRespuesta = new Date();

        // Añadir tiempo por respuesta (actualmente 20 segundos)
        tiempoRespuesta.setSeconds(tiempoRespuesta.getSeconds() + 20);
        return tiempoRespuesta;
    }


    useEffect(() => {

        inicioTiempo(nuevoTiempoRespuesta());
    }, [props]);




    return (

        <div className="flex align-items-center justify-content-center card-container blue-container p-0">
            <div className="scalein animation-duration-500 animation-iteration-1 flex align-items-center justify-content-center
            font-bold lg:text-lg surface-300 border-primary border-3 text-blue-600 border-round-xl lg:border-circle m-2 px-5 py-3 lg:w-11rem lg:h-4rem -mt-5 md:-mt-5 lg:m-0  shadow-8" id="crono">{tiempo} </div>
        </div>
    );
}