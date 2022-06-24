import { render } from "react-dom";

const ObtenerPreguna = function () {
    //Crear una función que obtenga las preguntas de la API y las guarde en el estado.
    state = {
        enunciado: "",
        correcta: "",
        incorrecta: "",
        categoria: "",
    }
    //Crear una función que obtenga las preguntas de la API y las guarde en el estado.
    obtenerPregunta = () => {
        fetch("")
            .get("ruta")
            .then(response => {
                this.setState({
                    enunciado: response.data.results[0].question,
                    correcta: response.data.results[0].correct_answer,
                    incorrecta: response.data.results[0].incorrect_answers,
                    categoria: response.data.results[0].category
                });
            })
            .catch(error => {
                console.log(error);
            });

    };


    render() {
        return (

            //He utilizado <view> en lugar de <div> porque creo que puede tener mejor prestación para una app según he leido.
            //Hay que terminar de hacer el código para que funcione, pero habría que debatirlo entre todos. Ver https://reactnative.dev/docs/view  

            <view style={styles.container}>
                <Text style={styles.text}>{this.state.categoria}</Text>
                <Text style={styles.text}>{this.state.enunciado}</Text>
                <Text style={styles.text}>Respuesta correcta: {this.state.correcta}</Text>
                <button onClick={this.comprobarRespuesta(true)} onProgress={this.comprobarRespuesta(true)} title="True" />
                <button onClick={this.comprobarRespuesta(false)} onProgress={this.comprobarRespuesta(false)} title="False" />
            </view>
        );
    }
}

export default ObtenerPreguna;