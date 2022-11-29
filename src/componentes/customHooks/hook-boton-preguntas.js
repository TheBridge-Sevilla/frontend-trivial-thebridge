import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";

export function useOpcion(
    preguntas,
    indicePregunta,
    opcion,
    partida,
    setIndicePregunta
) {
    const { i18n } = useTranslation();
    const [colorBoton, setColorBoton] = useState("surface-300");
    const [botonSelecionado, setBotonSelecionado] = useState(false);

    let indiceBotones = preguntas[indicePregunta].opciones[i18n.language].indexOf(opcion);
    const url = process.env.REACT_APP_API_URL + "/preguntas/respuesta";

    const handleIndicePreguntas = () => {

        if (!botonSelecionado) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    partidaID: partida.partidaID,
                    preguntaID: partida.quiz[indicePregunta].id,
                    indice: indicePregunta,
                    respuesta: indiceBotones,
                }),
            };
            fetch(url, requestOptions)
                .then((response) => response.json())
                .then(
                    (json) => json ? setColorBoton("green-400") : setColorBoton("red-400")
                );

            setBotonSelecionado(true);
            console.log('click')
            setTimeout(() => {
                setIndicePregunta(indicePregunta + 1);
                setBotonSelecionado(false);
            }, 945);
        }
    };

    const Respuesta = (opcion) => {
        return <div key={opcion} className="col-12 lg:col-6">
            <Button
                key={opcion}
                onClick={handleIndicePreguntas}
                id="boton-opcion"
                label={opcion}
                className={`surface-300 bg-${colorBoton} font-bold text-center text-blue-600  border-round-2xl
                p-button-raised m:text-l lg:text-2xl transition-colors transition-duration-500 w-full h-full
                border-3 hover:border-blue-900 shadow-8`}
            />
        </div>
    }

    return { Respuesta }
}