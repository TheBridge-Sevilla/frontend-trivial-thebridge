import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import "./fin-partida.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function FinPartida(props) {
  const resultado = props.puntuacion*100/props.indicePregunta


/*   fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ categoria: props.categoria }),
  })
    .then((res) => res.json())
    .then((json) => {
      setPreguntas(json);
    }); */

/*   const DataTableDemo = () => {

    const [datos, setProducts] = useState([]);

    const columns = [
        {field: 'posicion', header: 'posicion'},
        {field: 'jugador', header: 'jugador'},
        {field: 'puntos', header: 'puntos'},
        {field: 'categoria', header: 'categoria'}
    ];

    useEffect(() => {
        productService = new ProductService();
        productService.getProductsSmall().then(data => setDatos(data));
    }, [])

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <DataTable value={datos}>
            {dynamicColumns}
        </DataTable>
    ); 
}*/

  return (
    <div className="bg-cyan-600 h-screen w-screen">
      <div className="card w-full bg-cyan-600 p-4" id="fin-partida">
        <div className="w-auto bg-bluegray-100 text-center p-5">
          <div className="card-container text-center text-3xl font-medium p-4" id="result-1">
            Fin de Partida
          </div>
          <div className="card-container text-center text-3xl font-medium p-4" id="result-1">
            Tú puntuación es {resultado}
             </div>
        </div>
        <div className="card w-full bg-blue-300 text-center p-4"><h3>Ranking</h3>

          <div className="card-container flex justify-content-center">
            <DataTable responsiveLayout="w-full scroll p-4">
              <Column field="posicion" header="Posición"></Column>
              <Column field="jugador" header="Jugador"></Column>
              <Column field="puntos" header="Puntos"></Column>
              <Column field="categoria" header="Categoria"></Column>
            </DataTable>
          </div>
        </div>
        <div className="card-container yellow-container mb-5 p-5">

          <Button className="p-button-raised block bg-yellow-500 font-bold text-center p-4 border-round mb-3 w-8 m-auto">Volver a jugar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FinPartida;