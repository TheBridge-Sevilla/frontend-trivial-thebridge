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

        <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
            <div className="scalein animation-duration-500 animation-iteration-1 flex align-items-center justify-content-center
            font-bold bg-yellow-500 text-white border-round m-2 px-5 py-3" id="crono">{tiempo}</div>
        </div>
    );
}