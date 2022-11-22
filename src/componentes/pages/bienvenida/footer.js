import React from "react";
import { SpeedDial } from "primereact/speeddial";
//import { Toast } from "primereact/toast";
//import { Toast } from 'primereact/toast';
//import { Tooltip } from 'primereact/tooltip';
//import './SpeedDialDemo.css'
//import DialogDemo from "./Terminos";
//const toast = useRef(null);
//import {Dialog} from 'primereact/dialog'

const items = [
    {label: "Términos",
    icon: "pi pi-book",
    command: () => {  
      
    },  
  },
  {
    label: "Privacidad",
    icon: "pi pi-eye",
  },
  {
    label: "Copywright",
    icon: "pi pi-info-circle",
  },
  {
    label: "Copywright",
    icon: "pi pi-file",
  },
  {
    label: "Reglas del juego",
    icon: "pi pi-question",
    command: () => {
      window.location.hash = "/fileupload";
    },
  },
  {
    label: "React Website",
    icon: "pi pi-github",
    command: () => {
      window.location.href = "https://github.com/TheBridge-Sevilla";
    },
  },
];


const Informacion = () => {
  return (
    <div className="card flex justify-content-center">
      <div
        className="speeddial-circle-demo"
        style={{ position: "relative", height: "500px" }}
      >
        <SpeedDial
          model={items}
          radius={80}
          direction="down"
          type="semi-circle"
        />
      </div>
    </div>
  );
};

export default Informacion