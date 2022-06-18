/*
function empezarCrono {
    // 90 segundos
    var tiempoJuego = new Date().getTime() + 90000;

    // función para el tiempo
    var finJuego = inicioTiempoJuego(function () {

        // fecha actual
        var fechaHoraActual = new Date().getTime();

        // Tiempo desde que pulsa el botón el jugador
        var tiempoDelJuador = tiempoJuego - fechaHoraActual;

        // Calcular unidad de los segundos
        var segundos = Math.floor((tiempoDelJuador % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("crono").innerHTML = segundos + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(finJuego);
            document.getElementById("crono").innerHTML = "Juego terminado";
        }
    }, 1000);
}
    return <div id="crono"></div>;



export default empezarCrono;
*/