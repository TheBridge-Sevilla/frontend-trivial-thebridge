import React from 'react'
import "./creditos.css"
import { Sidebar } from 'primereact/sidebar'
import { useContextoUsuario } from '../../contexto/contextoUsuario'
import { useMediaQuery } from "usehooks-ts";


export default function Creditos() {
  const matches = useMediaQuery("(min-width: 576px)");
  const { abrirFooter, setAbrirFooter } = useContextoUsuario();

       
  return (
    <Sidebar
      visible={abrirFooter}
      className="surface-300"
      position="bottom"
      onHide={() => setAbrirFooter(false)}
      modal={false}
      id="creditos"
    >
      
      <div className={matches ? "footer" : "footer movil" }>
      <h4>Made with <span style={{ color: "#e25555" }}>&#9829;</span> by <a
          href='https://github.com/TheBridge-Sevilla'
          target="_blank"
          rel="noopener noreferrer">The bridge Sev</a></h4>
      <div className='wrapper'>
        {matches ? <div className='static-txt'>By</div> : <></>}
        <ul className='dynamic-txts'>
          <a href='https://github.com/eduardoaguilar96' target="_blank"
            rel="noopener noreferrer">
            <li>
              <span>eduardoaguilar96</span>
            </li>
          </a>
          <a href='https://github.com/franalvarez88' target="_blank"
            rel="noopener noreferrer">
            <li>
              <span>franalvarez88 </span>
            </li>
          </a>
          <a href='https://github.com/swbatallas' target="_blank"
            rel="noopener noreferrer">
            <li>
              <span>swbatallas </span>
            </li>
          </a>
          <a href='https://github.com/frapercanFS' target="_blank"
            rel="noopener noreferrer">
            <li>
              <span>frapercan </span>
            </li>
          </a>
          <a href='https://github.com/idavid80' target="_blank"
            rel="noopener noreferrer">
            <li>
              <span>idavid80</span>
            </li>
          </a>
          <a href='https://github.com/P-Kempf' target="_blank"
            rel="noopener noreferrer">
            <li>
              <span>P-Kempf</span>
            </li>
          </a>
        </ul>
        
      </div>
      </div>
    </Sidebar>
  )
}
